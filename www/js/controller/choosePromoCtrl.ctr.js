(function(){
	'use strict';

	angular
		.module('app')
		.controller('choosePromoCtrl', choosePromoCtrl);

		function choosePromoCtrl($scope, $stateParams, dataFactory, $ionicModal, $ionicPopup){
			dataFactory.getPromos().then(function (data) {
			       $scope.promoList = data.data.promoList;
			        console.log($scope.promoList);
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
			   dataFactory.setPromoDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
			 }
			 $scope.openModal = function(index) {
			   $scope.modal.show();
			   $scope.service = {};
			   $scope.name = $scope.promoList[index].strPromoName;
			   $scope.id = $scope.promoList[index].intPromoID;
			   $scope.price = $scope.promoList[index].dblPromoPrice;
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