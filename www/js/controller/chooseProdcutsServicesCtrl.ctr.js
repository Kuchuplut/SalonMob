(function(){
	'use strict';

	angular
		.module('app')
		.controller('chooseProdcutsServicesCtrl', chooseProdcutsServicesCtrl);

		function chooseProdcutsServicesCtrl($scope, $stateParams, dataFactory, $ionicModal, $ionicPopup, $state){

			$scope.fromAppointment = $stateParams.fromApp;
			console.log("fromApp: " + $scope.fromAppointment);
			var homeReservationDetails = dataFactory.getHomeReservationDetails();
			var appointmentDetails = dataFactory.getAppointmentDetails();
			console.log(appointmentDetails);
			var customerDetails = dataFactory.getCustomerDetails();
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
			 });
			dataFactory.getLocation().then(function (data) {
			    $scope.locationList = data.data.locationList;
			 });

			$ionicModal.fromTemplateUrl('templates/chooseEmployees.html', {
			   scope: $scope,
			   animation: 'slide-in-up'
			 }).then(function(modal) {
			   $scope.modal = modal;
			 });
			 $scope.sendEmployees = function(){
			   var array = [];
			   var i;
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

			  $ionicModal.fromTemplateUrl('templates/viewOrderModal.html', {
			      scope: $scope,
			      animation: 'slide-in-up'
			    }).then(function(modal) {
			      $scope.modal2 = modal;
			    });

			    $scope.openModal2 = function() {
			    		$scope.serviceList = dataFactory.getServiceDetails();
			    	  $scope.promoList = dataFactory.getPromoDetails();
			    	  $scope.packageList = dataFactory.getPackageDetails();
			    	  $scope.productList = dataFactory.getProductDetails();

			    	  var netTotal = 0;
			    	  var subTotal = 0;
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


			    	  for(var i = 1 ; i < $scope.productList.length; i++){
			    	     selectedProduct += $scope.productList[i].id + ',';
			    	     productQuantity += $scope.productList[i].quantity + ',';
			    	     productTotal += $scope.productList[i].price;
			    	  } 
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
			    	  subTotal = serviceTotal+promoTotal+packageTotal+productTotal;
			    	  if(subTotal >= 200){
			    	    $scope.subTotal = subTotal*homeServiceDependency;
			    	  }else{
			    	    $scope.subTotal = subTotal;
			    	  }
			    	  console.log($scope.subTotal);

			    	  	var locationCost = 0;
			    	  	for(var i = 0; i < $scope.locationList.length; i++){
			    	  		if(homeReservationDetails.selectedLocation == $scope.locationList[i].intLocationID){
			    	  			 locationCost = parseFloat($scope.locationList[i].dblLocationPrice);
			    	  		}
			    	  	}
			    	  	netTotal =(locationCost + subTotal);
			    	  	$scope.netTotal = netTotal;
			    	  	console.log($scope.serviceList);
			    	  	console.log($scope.promoList);
			    	  	console.log($scope.packageList);
			    	  	console.log($scope.productList);
			      $scope.modal2.show();
			    };
			    $scope.closeModal = function() {
			      $scope.modal2.hide();
			    };
			    // Cleanup the modal when we're done with it!
			    $scope.$on('$destroy', function() {
			      $scope.modal2.remove();
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
			  $scope.productList = dataFactory.getProductDetails();

			  var netTotal = 0;
			  var subTotal = 0;
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


			  for(var i = 1 ; i < $scope.productList.length; i++){
			     selectedProduct += $scope.productList[i].id + ',';
			     productQuantity += $scope.productList[i].quantity + ',';
			     productTotal += $scope.productList[i].price;
			  } 
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
			  subTotal = serviceTotal+promoTotal+packageTotal+productTotal;
			  if(subTotal >= 200){
			    $scope.subTotal = subTotal*homeServiceDependency;
			  }else{
			    $scope.subTotal = subTotal;
			  }
			  console.log($scope.subTotal);

			  	var locationCost = 0;
			  	for(var i = 0; i < $scope.locationList.length; i++){
			  		if(homeReservationDetails.selectedLocation == $scope.locationList[i].intLocationID){
			  			 locationCost = parseFloat($scope.locationList[i].dblLocationPrice);
			  		}
			  	}
			  	netTotal =(locationCost + subTotal);
			  	$scope.netTotal = netTotal;
			 

			   dataFactory.saveHomeReservation(customerDetails, homeReservationDetails, selectedService, serviceQuantity, 
			                                  selectedPromo, PromoQuantity, selectedPackage, packageQuantity, 
			                                  selectedProduct, productQuantity, $scope.netTotal, selectedEmployees);
			    var alertPopup = $ionicPopup.alert({
			      title:'Reservation successfully created!',
			      template: 'Reserve another!'
			    });

			    alertPopup.then(function(res) {
			      $state.go('tabsController.homeReservation');
			    });
			  
			};

			//For appointment
			$scope.submitAppointment = function(){
			  $scope.serviceList = dataFactory.getServiceAppDetails();
			  $scope.promoList = dataFactory.getPromoDetails();
			  $scope.packageList = dataFactory.getPackageDetails();
			  $scope.productList = dataFactory.getProductDetails();
			  console.log($scope.serviceList);
			  var netTotal = 0;
			  var subTotal = 0;
			  var selectedProduct = "";
			  var productQuantity = "";
			  var productTotal = 0;
			  var selectedService = "";
			  var employeePerService = "";
			  var serviceTotal = 0;
			  var selectedPromo = "";
			  var PromoQuantity = "";
			  var promoTotal = 0;
			  var selectedPackage = "";
			  var packageQuantity = "";
			  var packageTotal = 0;


			  for(var i = 1 ; i < $scope.productList.length; i++){
			     selectedProduct += $scope.productList[i].id + ',';
			     productQuantity += $scope.productList[i].quantity + ',';
			     productTotal += $scope.productList[i].price;
			  } 
			  for(var i = 1 ; i < $scope.serviceList.length; i++){
			     selectedService += $scope.serviceList[i].id + ',';
			     employeePerService += $scope.serviceList[i].employee.id + ',';
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
			  subTotal = serviceTotal+promoTotal+packageTotal+productTotal;
			  if(subTotal >= 200){
			    $scope.subTotal = subTotal*homeServiceDependency;
			  }else{
			    $scope.subTotal = subTotal;
			  }
			  console.log($scope.subTotal);

			  	var locationCost = 0;
			  	for(var i = 0; i < $scope.locationList.length; i++){
			  		if(homeReservationDetails.selectedLocation == $scope.locationList[i].intLocationID){
			  			 locationCost = parseFloat($scope.locationList[i].dblLocationPrice);
			  		}
			  	}
			  	netTotal =(locationCost + subTotal);
			  	$scope.netTotal = netTotal;
			 	console.log(employeePerService);


			  dataFactory.saveAppointment(customerDetails, appointmentDetails, selectedService, employeePerService, 
			                                  selectedPromo, PromoQuantity, selectedPackage, packageQuantity, 
			                                  selectedProduct, productQuantity, $scope.netTotal);
			    var alertPopup = $ionicPopup.alert({
			      title:'Appointment successfully created!',
			      template: 'Reserve another!'
			    });

			    alertPopup.then(function(res) {
			      $state.go('tabsController.homeReservation');
			    });
			  
			};
		}
})();