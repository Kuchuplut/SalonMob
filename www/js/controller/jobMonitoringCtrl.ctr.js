(function(){
	'use strict';

	angular
		.module('app')
		.controller('jobMonitoringCtrl', jobMonitoringCtrl);

		function jobMonitoringCtrl($scope, $stateParams, dataFactory, $ionicModal){
			var urlBase = dataFactory.getURL();
			$scope.job = {
				status: 'VENUE'
			};

			$scope.empDetails = dataFactory.getEmployeeDetails();
			console.log($scope.empDetails);
			var psdata = {
			              "intEmployeeID": $scope.empDetails.intEmpID
			         	 };
			$.ajax({
			    url: 'http://'+ urlBase + ':8080/SalonManagement/getEmployeeJob',
			    type: 'post',
			    data: psdata,
			    dataType: 'json',
			    async: true,
			    success: function (data) {
			      console.log("Success jobs");
			      console.log(data);
			      $scope.deliveryList = data.deliveryList;
			      $scope.reservationList = data.reservationList;
			      $scope.walkinList = data.walkinList;
			    },
			    error: function () {
			        console.log("Error in posting");
			    }
			});

			$ionicModal.fromTemplateUrl('templates/jobDetailModal.html', {
			   scope: $scope,
			   animation: 'slide-in-up'
			 }).then(function(modal) {
			   $scope.modal = modal;
			 });
			 $scope.updateJobStatus = function(status){
			   console.log(status);

			   var psdata = {
			                 "intJobID": $scope.id,
			                 "strTransType": $scope.transType, 
			                 "strJobType": $scope.jobType,
			                 "strStatus": status

			            	 };
			   return $.ajax({
			       url: 'http://'+ urlBase + ':8080/SalonManagement/updateEmpStatus',
			       type: 'post',
			       data: psdata,
			       dataType: 'json',
			       async: true,
			       success: function (data) {
			         console.log("Success jobs");
			        	console.log(data);
			       },
			       error: function () {
			           console.log("Error in posting");
			           console.log(psdata);
			       }
			   });
			 };
			 $scope.openWalkinModal = function(index) {
			 	console.log("Modal should open!");
			   $scope.modal.show();
			   $scope.name = $scope.walkinList[index].strCustomerName;
			   $scope.id = $scope.walkinList[index].intJobID;
			   $scope.transType = $scope.walkinList[index].strTransType;
			   $scope.jobType = $scope.walkinList[index].strJobType;
			
			 };

			 $scope.openDeliveryModal = function(index) {
			 	console.log("Modal should open!");
			   $scope.modal.show();
			   $scope.name = $scope.deliveryList[index].strCustomerName;
			   $scope.id = $scope.deliveryList[index].intJobID;
			
			 };

			 $scope.openReservationModal = function(index) {
			 	console.log("Modal should open!");
			   $scope.modal.show();
			   $scope.name = $scope.reservationList[index].strCustomerName;
			   $scope.id = $scope.reservationList[index].intJobID;
			
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