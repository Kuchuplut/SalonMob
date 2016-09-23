(function(){
	'use strict';

	angular
		.module('app')
		.controller('choosePackageCtrl', choosePackageCtrl);

		function choosePackageCtrl($scope, $stateParams, dataFactory, $ionicModal, $ionicPopup){
			dataFactory.getPackages().then(function (data) {
			       $scope.packageList = data.data.packageList;
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
			     dataFactory.setPackageDetails($scope.name, $scope.id, $scope.service.quantity, $scope.price*$scope.service.quantity);
			   }
			   $scope.openModal = function(index) {
			     $scope.modal.show();
			     $scope.service = {};
			     $scope.name = $scope.packageList[index].strPackageName;
			     $scope.id = $scope.packageList[index].intPackageID;
			     $scope.price = $scope.packageList[index].dblPackagePrice;
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