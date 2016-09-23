(function(){
	'use strict';

	angular
		.module('app')
		.controller('chooseProductCtrl', chooseProductCtrl);

		function chooseProductCtrl($scope, $stateParams, dataFactory, $ionicModal, $ionicPopup){
			dataFactory.getProducts().then(function (data) {
			       $scope.productList = data.data.productList;
			    });

			 $ionicModal.fromTemplateUrl('templates/viewServicesModal.html', {
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
			     dataFactory.setProductDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
			   }
			   $scope.openModal = function(index) {
			     $scope.modal.show();
			     $scope.service = {};
			     $scope.name = $scope.productList[index].strProductName;
			     $scope.id = $scope.productList[index].intProductID;
			     $scope.price = $scope.productList[index].dblProductPrice;
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