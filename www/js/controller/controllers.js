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
         
// 
   
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
   
.controller('choosePromoCtrl', ['$scope', '$stateParams', 'dataFactory', '$ionicModal',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory, $ionicModal) {
dataFactory.getPromos().then(function (data) {
       $scope.promoList = data.data.promoList;
        console.log($scope.promoList);
    });
$ionicModal.fromTemplateUrl('templates/viewServicesModal.html', {
   scope: $scope,
   animation: 'slide-in-up'
 }).then(function(modal) {
   $scope.modal = modal;
 });
 $scope.addToCart = function(){
   dataFactory.setPromoDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
 }
 $scope.openModal = function(index) {
   $scope.modal.show();
   $scope.service = {};
   $scope.name = $scope.promoList[index].strPromoName;
   $scope.id = $scope.promoList[index].intPromoID;
   $scope.price = $scope.promoList[index].dblPromoPrice;
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
   
.controller('choosePackageCtrl', ['$scope', '$stateParams', 'dataFactory', '$ionicModal',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory, $ionicModal) {
dataFactory.getPackages().then(function (data) {
       $scope.packageList = data.data.packageList;
    });

 $ionicModal.fromTemplateUrl('templates/viewServicesModal.html', {
     scope: $scope,
     animation: 'slide-in-up'
   }).then(function(modal) {
     $scope.modal = modal;
   });
   $scope.addToCart = function(){
     dataFactory.setPackageDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
   }
   $scope.openModal = function(index) {
     $scope.modal.show();
     $scope.service = {};
     $scope.name = $scope.packageList[index].strPackageName;
     $scope.id = $scope.packageList[index].intPackageID;
     $scope.price = $scope.packageList[index].dblPackagePrice;
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
   
.controller('requestHomeReservationCtrl', ['$scope', '$stateParams', 'dataFactory', 'ionicTimePicker',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory, ionicTimePicker) {
$scope.details = {};
$scope.sendDetails = function(details){
  console.log("sending details");
  dataFactory.setHomeReservationDetails(details);
};

 $scope.openTimePicker1 = function () {
  var ipObj1 = {
    callback: function (val) {
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        $scope.details.tmFrom = selectedTime.getUTCHours() + ":" + selectedTime.getUTCMinutes();
        console.log($scope.details.tmFrom);
      }
    },
    inputTime: 50400,
    format: 12,
    step: 5,
    setLabel: 'Set'
  };
  ionicTimePicker.openTimePicker(ipObj1);
};

$scope.openTimePicker2 = function () {
  var ipObj1 = {
    callback: function (val) {
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        $scope.details.tmTo = selectedTime.getUTCHours() + ":" + selectedTime.getUTCMinutes();
        console.log($scope.details.tmFrom);
      }
    },
    inputTime: 50400,
    format: 12,
    step: 5,
    setLabel: 'Set'
  };
  ionicTimePicker.openTimePicker(ipObj1);
};
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
   
.controller('chooseProdcutsServicesCtrl', ['$scope', '$stateParams', 'dataFactory', '$ionicModal',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, dataFactory, $ionicModal) {
var homeReservationDetails = dataFactory.getHomeReservationDetails();
$scope.orderList = dataFactory.getOrderDetails()
$scope.employees = {};
var homeServiceDependency = 0;
var selectedEmployees = '';

dataFactory.getDependencies().then(function (data) {
    $scope.dependencyList = data.data.dependencies;
    homeServiceDependency = parseFloat($scope.dependencyList[5].strValue);
 });
dataFactory.getEmployees().then(function (data) {
    $scope.employeeList = data.data.employeeList;
    console.log($scope.employeeList);
 });

$ionicModal.fromTemplateUrl('templates/chooseEmployees.html', {
   scope: $scope,
   animation: 'slide-in-up'
 }).then(function(modal) {
   $scope.modal = modal;
 });
 $scope.sendEmployees = function(){
   var array = [];
      for(i in $scope.employees) {
          console.log($scope.employees[i]);
          if($scope.employees[i] == true) {
              selectedEmployees += i + ',';
          }
      }
 }
 $scope.openModal = function(index) {
   $scope.modal.show();
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


$scope.submitReservation = function(){
  $scope.serviceList = dataFactory.getServiceDetails();
  $scope.promoList = dataFactory.getPromoDetails();
  $scope.packageList = dataFactory.getPackageDetails();

  var netTotal = 0;
  var selectedProduct = "";
  var productQuantity = "";
  var productTotal = 0;
  var selectedService = "";
  var serviceQuantity = "";
  var serviceTotal = 0;
  var selectedPromo = "";
  var PromoQuantity = "";
  var promoTotal = 0;
  var selectedPackage = "";
  var packageQuantity = "";
  var packageTotal = 0;

  for(var i = 1 ; i < $scope.serviceList.length; i++){
     selectedService += $scope.serviceList[i].id + ',';
     serviceQuantity += $scope.serviceList[i].quantity + ',';
     serviceTotal += $scope.serviceList[i].price;
  } 
  for(var i = 1 ; i < $scope.promoList.length; i++){
     selectedPromo += $scope.promoList[i].id + ',';
     PromoQuantity += $scope.promoList[i].quantity + ',';
     promoTotal += $scope.promoList[i].price;
  } 
  for(var i = 1 ; i < $scope.packageList.length; i++){
     selectedPackage += $scope.packageList[i].id + ',';
     packageQuantity += $scope.packageList[i].quantity + ',';
     packageTotal += $scope.packageList[i].price;
  } 
  netTotal = serviceTotal+promoTotal+packageTotal;
  if(netTotal >= 200){
    $scope.netTotal = netTotal*homeServiceDependency;
  }else{
    $scope.netTotal = netTotal;
  }
  console.log($scope.netTotal);

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  } 

  if(mm<10) {
      mm='0'+mm
  } 

  today = yyyy+'/'+mm+'/'+dd;

  dataFactory.saveHomeReservation(homeReservationDetails, selectedService, serviceQuantity, 
                                  selectedPromo, PromoQuantity, selectedPackage, packageQuantity, 
                                  selectedProduct, productQuantity, $scope.netTotal, today, selectedEmployees);
}

}])
 