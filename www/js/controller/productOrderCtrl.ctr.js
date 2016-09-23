(function(){
	'use strict';

	angular
		.module('app')
		.controller('productOrderCtrl', productOrderCtrl);

		function productOrderCtrl($scope, dataFactory){
			var urlBase = dataFactory.getURL();
			$scope.customerDetails = dataFactory.getCustomerDetails();
			var psdata = {
				"custID": $scope.customerDetails.intCustID
			}


			$scope.init = function(){
				$.ajax({
				      url:'http://'+ urlBase + ':8080/SalonManagement/getOrders',
				      type: 'post',
				      data: psdata,
				      dataType: 'json',
				      async: true,
				      success: function (data) {
				        console.log("Success Get Rservations");
				        console.log(data);
				        $scope.ordertList = data.orders;
				        console.log($scope.ordertList);
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