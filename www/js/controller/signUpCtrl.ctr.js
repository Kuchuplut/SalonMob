(function(){
	'use strict';

	angular
		.module('app')
		.controller('signUpCtrl', signUpCtrl);

		function signUpCtrl($scope, $stateParams, $ionicPopup, dataFactory, $ionicModal, $window, $state){
			$scope.data = {};
			$scope.user = {};
			$scope.code = {};
			$scope.emp = {};

			var verID;
			var accID;
			var verCode;

			$scope.submitRegistration = function(user){
				var urlBase = dataFactory.getURL();
		 		var psdata = {
		 	                 "strName": user.username,
		 	                 "strContact": user.contact,
		 	                 "strEmail": user.email,
		 	                 "strUsername": user.username,
		 	                 "strPassword": user.password
		 	             };

			 	   $.ajax({
			 	       url: 'http://'+ urlBase + ':8080/SalonManagement/registerCustomer',
			 	       type: 'post',
			 	       data: psdata,
			 	       dataType: 'json',
			 	       async: true,
			 	       success: function (data) {
			 	         console.log("Success");
			 	         console.log(data); 	
			 	         verID = data.verification.intVerificationID;
			 	         accID = data.verification.intCustomerID;
			 	         verCode = data.verification.strVerificationCode;
			 	         verify(verID, accID, ver);
			 	       },
			 	       error: function (data) {
			 	       		console.log(data);
			 	            console.log("Error in posting");
			 	       }
			 	   }); 
			 };

			 function verify(){
			 	var urlBase = dataFactory.getURL();
		 	    var psdata = {
		 	                  "intVerificationID": verID,
		 	                  "strVerificationCode": verCode,
		 	                  "intAccountID": accID
		 	              
		 	              };
		 	    
		 	      return $.ajax({
		 	          url: 'http://'+ urlBase + ':8080/SalonManagement/verifyCustomer',
		 	          type: 'post',
		 	          data: psdata,
		 	          dataType: 'json',
		 	          async: true,
		 	          success: function (data) {
		 	            console.log("Success");
		 	            console.log(data);
		 	            isSuccess();
		 	          },
		 	          error: function (data) {
		 	              console.log("Error in posting");
		 	              console.log(psdata);
		 	          }
		 	      });
			 }

			 $scope.resendVerification = function(){
			 	var urlBase = dataFactory.getURL();
		 	    var psdata = {
		 	                  "intVerificationID": verID,
		 	                  "strVerificationCode": verCode,
		 	                  "intAccountID": accID
		 	              
		 	              };
		 	    
		 	      return $.ajax({
		 	          url: 'http://'+ urlBase + ':8080/SalonManagement/resendCode',
		 	          type: 'post',
		 	          data: psdata,
		 	          dataType: 'json',
		 	          async: true,
		 	          success: function (data) {
		 	            console.log("Success");
		 	            console.log(data);
		 	            isSuccess();
		 	          },
		 	          error: function (data) {
		 	              console.log("Error in posting");
		 	              console.log(psdata);
		 	          }
		 	      });
			 };

			   function isSuccess(){
                var alertPopup = $ionicPopup.alert({
                  title:'Code was resent to your number/email',
                  template: 'Check them!'
                });

                alertPopup.then(function(res) {
                  
                });
            }
		
			 //IONIC MODAL FOR SIGN UP
			$ionicModal.fromTemplateUrl('templates/verifyModal.html', {
			   scope: $scope,
			   animation: 'slide-in-up'
			 }).then(function(modal) {
			   $scope.modal = modal;
			 });

			 $scope.verifyCustomer = function(res){
			 	var urlBase = dataFactory.getURL();
			
		 		
		 	    var psdata = {
		 	                  "intVerificationID": verID,
		 	                  "strVerificationCode": res.verificationCode,
		 	                  "intAccountID": accID
		 	              
		 	              };
		 	    
		 	      return $.ajax({
		 	          url: 'http://'+ urlBase + ':8080/SalonManagement/verifyCustomer',
		 	          type: 'post',
		 	          data: psdata,
		 	          dataType: 'json',
		 	          async: true,
		 	          success: function (data) {
		 	            console.log("Success");
		 	            console.log(data);
		 	            isVerified();
		 	          },
		 	          error: function (data) {
		 	              console.log("Error in posting");
		 	              console.log(psdata);
		 	          }
		 	      });
		 	    console.log($scope.verificationMessage);
			 };

			 function isVerified(){
                var alertPopup = $ionicPopup.alert({
                  title:'Your Acoun is verified!',
                  template: 'Enjoy using our app!'
                });

                alertPopup.then(function(res) {
                   $state.go('login');
                });
            }

			 function openSesame(){
			 	$scope.modal.show();
			 }
			
			 $scope.openModal = function(){
			   $scope.modal.show();
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