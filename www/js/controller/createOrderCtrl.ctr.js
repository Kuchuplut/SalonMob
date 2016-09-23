(function(){
	'use strict';

	angular
		.module('app')
		.controller('createOrderCtrl', createOrderCtrl);

		function createOrderCtrl($scope, $stateParams, dataFactory, $ionicModal, $ionicPopup, $state){
			$scope.details = {};
			dataFactory.getProducts().then(function (data) {
			      $scope.productList = data.data.productList;
			      console.log($scope.productList);
			   });
			$scope.orderList = dataFactory.getOrderDetails();

			console.log($scope.orderList)
			$scope.gotoOrderSummary = function(){
				if($scope.orderList.length <= 1){
					var alertPopup = $ionicPopup.alert({
					  title: 'Nothing is in your cart!',
					  template: 'Buy more!'
					});

					alertPopup.then(function(res) {
					  console.log('Thank you for not eating my delicious ice cream cone');
					});
				}else{
					$state.go('orderSummary');
				}
				
			};
		}
})();