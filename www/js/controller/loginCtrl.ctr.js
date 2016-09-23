(function(){
	'use strict';

	angular
		.module('app')
		.controller('loginCtrl', loginCtrl);

		function loginCtrl($scope, $stateParams, $ionicPopup, dataFactory, $ionicModal, $window, $state){
			$scope.data = {};
			$scope.user = {};
			$scope.verify = {};
			$scope.emp = {};

			var myPopup = $ionicPopup.show({
			    template: '<input type="text" ng-model="data.wifi">',
			    title: 'Enter Address',
			    subTitle: 'Please use normal things',
			    scope: $scope,
			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.data.wifi) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			            return $scope.data.wifi;
			          }
			        }
			      }
			    ]
			  });

			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			    dataFactory.setURL(res);
			  });

			//LOGIN

			$scope.login = function(user){
				var urlBase = dataFactory.getURL();
				console.log(user.isEmployee);
				if(user.isEmployee == true){
					var psdata = {
					              "username": user.username,
					              "password": user.password
					         	 };
					
					  return $.ajax({
					      url:'http://'+ urlBase + ':8080/SalonManagement/empMobileLogIn',
					      type: 'post',
					      data: psdata,
					      dataType: 'json',
					      async: true,
					      success: function (data) {
					        console.log("Success Employee");
					        dataFactory.setEmployeeDetails(data.employee);
					        if(data.result == "success"){
					        		console.log(data.result);
					        	$state.go('employeeHome');
					        }else if(data.result == "incorrect"){
				      
				        	  var alertPopup = $ionicPopup.alert({
				        	    title: 'Invalid Username/password',
				        	    template: 'Might misspelled it'
				        	  });

				        	  alertPopup.then(function(res) {
				        	    console.log('Thank you for not eating my delicious ice cream cone');
				        	  });
				        	}
					      },
					      error: function () {
					          console.log("Error in posting");
					      }
					  });
				}else{
					var psdata = {
					              "username": user.username,
					              "password": user.password
					         	 };
					
					  return $.ajax({
					      url: 'http://'+ urlBase + ':8080/SalonManagement/loginCustomer',
					      type: 'post',
					      data: psdata,
					      dataType: 'json',
					      async: true,
					      success: function (data) {
					        console.log("Success Customer");
					        console.log(data);
					        if(data.result == "success"){
					        	$window.location.href = '/#/page1/homeReservation';
					        	dataFactory.setCustomerDetails(data.customer);
					        }else if(data.result == "invalid"){
					        	var alertPopup = $ionicPopup.alert({
					        	  title: 'Invalid Username/password',
					        	  template: 'Might misspelled it'
					        	});

					        	alertPopup.then(function(res) {
					        	  console.log('Thank you for not eating my delicious ice cream cone');
					        	});
					        }
					        
					      },
					      error: function () {
					          console.log("Error in posting");
					      }
					  });
				}
				
			}


		}
})();