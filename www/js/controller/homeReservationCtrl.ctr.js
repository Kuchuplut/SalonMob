(function(){
	'use strict';

	angular
		.module('app')
		.controller('homeReservationCtrl', homeReservationCtrl);

		function homeReservationCtrl($scope, dataFactory){

			var urlBase = dataFactory.getURL();
			$scope.customerDetails = dataFactory.getCustomerDetails();
			var psdata = {
				"custID": $scope.customerDetails.intCustID
			}


			$scope.init = function(){
				$.ajax({
				      url:'http://'+ urlBase + ':8080/SalonManagement/getReservations',
				      type: 'post',
				      data: psdata,
				      dataType: 'json',
				      async: true,
				      success: function (data) {
				        console.log("Success Get Rservations");
				        console.log(data);
				        $scope.reservationtList = data.reservations;
				        console.log($scope.reservationtList);
				      },
				      error: function (data) {
				          console.log("Error in posting");
				          console.log(data);
				      }
		  		});
			}


			$scope.cancelReservation = function(){

			};
		
		}
})();