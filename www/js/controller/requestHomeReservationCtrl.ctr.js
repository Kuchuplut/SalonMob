(function(){
	'use strict';

	angular
		.module('app')
		.controller('requestHomeReservationCtrl', requestHomeReservationCtrl);

		function requestHomeReservationCtrl($scope, $stateParams, dataFactory){
			$scope.details = {};
			$scope.dtm = {};
			$scope.customerDetails = dataFactory.getCustomerDetails();
			dataFactory.getLocation().then(function (data) {
			    $scope.locationList = data.data.locationList;
			 });

			$scope.sendDetails = function(details, dtm){
			  console.log("sending details");			  
			  var date =  moment(dtm.dateValue).format("MMMM/d/YYYY");
			  var time =  moment(dtm.timeValue).format("hh:mm:ss");
			  moment()
			  dataFactory.setHomeReservationDetails(details, date, time);
			};	
		}
})();