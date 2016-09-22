angular.module('app.controllers', [])
  
.controller('homeReservationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('setAppointmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productOrderCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
         
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('chooseServiceCtrl', ['$scope', '$stateParams', 'dataFactory', '$ionicModal', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory, $ionicModal, $rootScope) {
dataFactory.getServices().then(function (data) {
       $scope.serviceList = data.data.serviceList;
    });
  $ionicModal.fromTemplateUrl('templates/viewServicesModal.html', {
     scope: $scope,
     animation: 'slide-in-up'
   }).then(function(modal) {
     $scope.modal = modal;
   });
   $scope.addToCart = function(){
     dataFactory.setServiceDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
   }
   $scope.openModal = function(index) {
     $scope.modal.show();
     $scope.service = {};
     $scope.name = $scope.serviceList[index].strServiceName;
     $scope.id = $scope.serviceList[index].intServiceID;
     $scope.price = $scope.serviceList[index].dblServicePrice;
   };
   $scope.closeModal = function() {
     $scope.modal.hide();
   };
   // Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
     $scope.modal.remove();
   });
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
     // Execute action
   });
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
     // Execute action
   });


}])
   
.controller('choosePromoCtrl', ['$scope', '$stateParams', 'dataFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory) {
dataFactory.getPromos().then(function (data) {
       $scope.promoList = data.data.promoList;
        console.log($scope.promoList);
    });

}])
   
.controller('choosePackageCtrl', ['$scope', '$stateParams', 'dataFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory) {
dataFactory.getPackages().then(function (data) {
       $scope.packageList = data.data.packageList;
    });

}])
   
.controller('createOrderCtrl', ['$scope', '$stateParams', 'dataFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory, $http) {
  dataFactory.getProducts().then(function (data) {
       $scope.productList = data.data.productList;
    });

}])
   
.controller('productDetailsCtrl', ['$scope', '$stateParams', '$ionicHistory', 'dataFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicHistory, dataFactory) {
 $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.name = $stateParams.name;
  $scope.price = $stateParams.price;
  $scope.id = $stateParams.id;
  $scope.details = {};

  $scope.addToCart = function(){
  	dataFactory.setOrderDetails($scope.name, $scope.id, $scope.details.quantity, $scope.price*$scope.details.quantity);
  };

}])
   
.controller('createAppointmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('requestHomeReservationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('orderSummaryCtrl', ['$scope', '$stateParams', 'dataFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory) {
$scope.orderList = dataFactory.getOrderDetails();
dataFactory.getLocation().then(function (data) {
    $scope.locationList = data.data.locationList;
 });

var selectedProduct = "";
var productQuantity = "";
var subTotal = 0;
var netTotal = 0;
$scope.details= {};

for(var i = 1 ; i < $scope.orderList.length; i++){
	 selectedProduct += $scope.orderList[i].id + ',';
	 productQuantity += $scope.orderList[i].quantity + ',';
	 subTotal += $scope.orderList[i].price;
} 
$scope.total = subTotal;

$scope.compute = function(){
	var locationCost = 0;
	for(var i = 0; i < $scope.locationList.length; i++){
		if($scope.details.selectedLocation == $scope.locationList[i].intLocationID){
			 locationCost = parseFloat($scope.locationList[i].dblLocationPrice);
		}
	}
	netTotal =(locationCost + subTotal);
	$scope.netTotal = netTotal;
};

$scope.submitRequest = function(details){
	dataFactory.saveProductOrer(details, selectedProduct, productQuantity, netTotal);
};


}])
   
.controller('chooseProdcutsServicesCtrl', ['$scope', '$stateParams', 'dataFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory) {
$scope.orderList = dataFactory.getOrderDetails();


$scope.submitReservation = function(){
  $scope.serviceList = dataFactory.getServiceDetails();
  var netTotal = 0;
  var selectedService = "";
  var serviceQuantity = "";
  var serviceTotal = 0;

  for(var i = 1 ; i < $scope.serviceList.length; i++){
     selectedService += $scope.serviceList[i].id + ',';
     serviceQuantity += $scope.serviceList[i].quantity + ',';
     serviceTotal += $scope.serviceList[i].price;
  } 
  netTotal = serviceTotal;
  $scope.netTotal = netTotal;

  console.log(selectedService);
  console.log(serviceQuantity);
  console.log(serviceTotal);
}

}])
 