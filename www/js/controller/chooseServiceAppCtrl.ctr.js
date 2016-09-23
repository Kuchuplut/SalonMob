(function(){
	'use strict';

	angular
		.module('app')
		.controller('chooseServiceAppCtrl', chooseServiceAppCtrl);

		function chooseServiceAppCtrl($scope, $stateParams, dataFactory, $ionicModal, $rootScope, $ionicPopup){
			dataFactory.getServices().then(function (data) {
			       $scope.serviceList = data.data.serviceList;
			    });
			$scope.service = {};
			var appointmentDetails = dataFactory.getAppointmentDetails();
			var list = dataFactory.getAvailableEmployees();
			$scope.employeeList = list.empList;
				//START MODAL
			  $ionicModal.fromTemplateUrl('templates/serviceDetailsAppModal.html', {
			     scope: $scope,
			     animation: 'slide-in-up'
			   }).then(function(modal) {
			     $scope.modal = modal;
			   });

			   $scope.addToCart = function(){
			   		var alertPopup = $ionicPopup.alert({
			   		  title: $scope.service.quantity + ' ' + $scope.name + 'for ' + $scope.price*$scope.service.quantity + 'Successfully added!',
			   		  template: 'Buy more!'
			   		});

			   		alertPopup.then(function(res) {
			   		  console.log('Thank you for not eating my delicious ice cream cone');
			   		});
			     dataFactory.setServiceAppDetails($scope.name, $scope.id, $scope.service.selectedEmployee, $scope.price);
			   };

			   $scope.openModal = function(index) {

			   	 $scope.category = $scope.serviceList[index].strServiceCategory;
			   	 var i = 0;
			   	 var j = 0;
			   	 $scope.availEmpList = [];
			   	 for(i = 0; i < $scope.employeeList.length; i++){
			   	 	for(j = 0; j < $scope.employeeList[i].specialization.length; j++){
			   	 		if( $scope.category == $scope.employeeList[i].specialization[j].name){
			   	 			console.log($scope.category);
			   	 			console.log($scope.employeeList[i].strEmpFirstName);
			   	 			$scope.availEmpList.push({
			   	 				emp: $scope.employeeList[i].strEmpFirstName,
			   	 				id: $scope.employeeList[i].intEmpID
			   	 			});
			   	 		}
			   	 	}
			   	 }
			   	 console.log($scope.availEmpList);
			     
			     $scope.name = $scope.serviceList[index].strServiceName;
			     $scope.id = $scope.serviceList[index].intServiceID;
			     $scope.price = $scope.serviceList[index].dblServicePrice;
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


		}
})();