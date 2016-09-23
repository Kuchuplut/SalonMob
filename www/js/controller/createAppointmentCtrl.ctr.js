(function(){
	'use strict';

	angular
		.module('app')
		.controller('createAppointmentCtrl', createAppointmentCtrl);

		function createAppointmentCtrl($scope, dataFactory){
			$scope.customerDetails = dataFactory.getCustomerDetails();
			$scope.details = {};
			
			var urlBase = dataFactory.getURL();
			var date =  moment($scope.details.dateValue).format("YYYY/MM/DD");
			var time =  moment($scope.details.timeValue).format("hh:mm:ss");
			var psdata = {
				"date": date,
				"time": time,
				"type": "appointment"
			};

			function getEmployee(handle){
				return $.ajax({
				    url: 'http://'+ urlBase + ':8080/SalonManagement/getAvailableEmployee',
				    type: 'post',
				    data: psdata,
				    dataType: 'json',
				    async: true,
				    success: function (data) {
				      console.log("Success");
				      console.log(data);
				      handle(data);
				    },
				    error: function () {
				        console.log("Error in posting");
				        console.log(psdata);
				    }
				});
			}

			$scope.sendDetails = function(details){
			  console.log("sending details");
			  dataFactory.setAppointmentDetails(time, date);
			};

			getEmployee(function(output){
				dataFactory.setAvailableEmployee(output);
			});


		}
})();