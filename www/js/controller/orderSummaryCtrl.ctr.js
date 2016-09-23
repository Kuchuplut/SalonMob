(function(){
	'use strict';

	angular
		.module('app')
		.controller('orderSummaryCtrl', orderSummaryCtrl);

		function orderSummaryCtrl($scope, $stateParams, dataFactory, $ionicPopup, $state){
			$scope.orderList = dataFactory.getOrderDetails();
			dataFactory.getLocation().then(function (data) {
			    $scope.locationList = data.data.locationList;
			 });
			$scope.customerDetails = dataFactory.getCustomerDetails();
			console.log($scope.customerDetails);
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
				dataFactory.saveProductOrer($scope.customerDetails, details, selectedProduct, productQuantity, netTotal);
				 var alertPopup = $ionicPopup.alert({
				    title:'Order successfully created!',
				    template: 'Reserve another!'
				  });

				  alertPopup.then(function(res) {
				    $state.go('tabsController.productOrder');
				  });
				
			};

		}
})();