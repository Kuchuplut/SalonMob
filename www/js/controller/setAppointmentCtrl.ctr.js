(function(){
	'use strict';

	angular
		.module('app')
		.controller('setAppointmentCtrl', setAppointmentCtrl);

		function setAppointmentCtrl($scope, dataFactory){
			var urlBase = dataFactory.getURL();
			$scope.customerDetails = dataFactory.getCustomerDetails();
			var psdata = {
				"custID": $scope.customerDetails.intCustID
			}


			$scope.init = function(){
				$.ajax({
				      url:'http://'+ urlBase + ':8080/SalonManagement/getAppointments',
				      type: 'post',
				      data: psdata,
				      dataType: 'json',
				      async: true,
				      success: function (data) {
				        console.log("Success Get Appointment");
				        console.log(data);
				        $scope.appointmentList = data.appointments;
				      },
				      error: function (data) {
				          console.log("Error in posting");
				          console.log(data);
				      }
		  		});
			}
			
			console.log($scope.appointmentList);

			$scope.cancelReservation = function(){

			};
		}
})();