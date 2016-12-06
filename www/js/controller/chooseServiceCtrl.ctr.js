(function(){
	'use strict';

	angular
		.module('app')
		.controller('chooseServiceCtrl', chooseServiceCtrl);

		function chooseServiceCtrl($scope, $stateParams, dataFactory, $ionicModal, $rootScope, $ionicPopup){
			dataFactory.getServices().then(function (data) {
			       $scope.serviceList = data.data.serviceList;
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
			   		});
			     dataFactory.setServiceDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
			   }
			   $scope.openModal = function(index) {
			     $scope.modal.show();
			     $scope.service = {};
			     $scope.name = $scope.serviceList[index].strServiceName;
			     $scope.id = $scope.serviceList[index].intServiceID;
			     $scope.price = $scope.serviceList[index].dblServicePrice;
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
			   // Execute action on remove moda
			   $scope.$on('modal.removed', function() {
			     // Execute action
			   });


		}
})();