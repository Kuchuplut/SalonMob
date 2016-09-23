(function(){
	'use strict';

	angular
		.module('app')
		.controller('productDetailsCtrl', productDetailsCtrl);

		function productDetailsCtrl($scope, $stateParams, $ionicHistory, dataFactory, $ionicPopup){
			$scope.myGoBack = function() {
			   $ionicHistory.goBack();
			 };
			 $scope.name = $stateParams.name;
			 $scope.price = $stateParams.price;
			 $scope.id = $stateParams.id;
			 $scope.details = {};

			 $scope.addToCart = function(){
			 	var alertPopup = $ionicPopup.alert({
			 	  title: $scope.details.quantity + ' ' + $scope.name + 'for ' + $scope.price*$scope.details.quantity + 'Successfully added!',
			 	  template: 'Buy more!'
			 	});

			 	alertPopup.then(function(res) {
			 	  $ionicHistory.goBack();
			 	});
			 	dataFactory.setOrderDetails($scope.name, $scope.id, $scope.details.quantity, $scope.price*$scope.details.quantity);
			 };
		}
})();