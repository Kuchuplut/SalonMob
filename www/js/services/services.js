angular.module('app.services', [])

.factory('dataFactory', ['$http', function($http, $ionicPopup, $state){
	 var urlBase = '';
     var orderDetails = [{}];
     var serviceDetails = [{}];
     var serviceAppDetails = [{}];
     var promoDetails = [{}];
     var packageDetails = [{}];
     var productDetails = [{}];
     var homeReservationDetails = [{}];
     var appointmentDetails = [{}];
     var employeeDetails = {};
     var customerDetails = {};
     var empList = {};

	 return {
          setURL: function (wifi) {
             urlBase = wifi
          },
         getURL: function () {
           return urlBase;
         },
         getLocation: function () {
            return $http.get('http://'+ urlBase + ':8080/SalonManagement/api/v1/getAllLocation').then(function (data) {
                 return data;
             });
         },
         getProducts: function () {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/api/v1/getAllProduct').then(function (data) {
                 return data;
             });
         },
         getEmployees: function (date, time) {
             
             var dateAndTime = $.param({
                    'date': date,
                    'time': time,
                    'type': "home service"
                });

              return $http({
                    method: 'post',
                    url: 'http://localhost:8080/SalonManagement/getAvailableEmployee',
                    data: dateAndTime,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function successCallback(data) {
                    return data.data.empList;
                   console.log(data.data)
                }, function errorCallback(response) {
                    return response;
                    console.log(response)
                });
         },
         getServices: function () {
             return $http.post('http://'+ urlBase + ':8080/SalonManagement/getServiceByType?type=walkin', { "type": "walkin" }).success(function(response) {
             
              });
         },
         getPromos: function () {
             return $http.post('http://'+ urlBase + ':8080/SalonManagement/getPromoByType', { "type": 'walkin' }).success(function(response) {
          
              });
         },
         getPackages: function () {
              return $http.post('http://'+ urlBase + ':8080/SalonManagement/getPackageByType?type=walkin', { "type": 'walkin' }).success(function(response) {
                console.log(response);
              });
         },
         getExtraCharges: function () {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/api/v1/getAllOtherCharge').then(function (data) {
                 return data;
             });
         },
         getDiscounts: function () {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/getAllDiscountNoDetails').then(function (data) {
                 return data;
             });
         },
         getUsernames: function () {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/getUsernames').then(function (data) {
                 return data;
             });
         },
         getRequest: function () {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/getAllProductRequest').then(function (data) {
                 return data;
             });
         },
         getOrders: function() {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/orders').then(function (data) {
                 return data;
             });
         },
         getReservations: function() {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/getAllReservationNoDetails').then(function (data) {
                 return data;
             });
         },
         getDependencies: function () {
             return $http.get('http://'+ urlBase + ':8080/SalonManagement/api/v1/getDependencies').then(function (data) {
                 return data;
             });
         },
         getCustomerReservation: function (id) {
             return $http.post('http://'+ urlBase + ':8080/SalonManagement/getReservations', {'id': id}).success(function(response) {
                console.log(response);
              });
         },
         getCustomerOrder: function (id) {
             return $http.post('http://'+ urlBase + ':8080/SalonManagement/getOrders', { "id": id }).success(function(response) {
                console.log(response);
              });
         },
         getCustomerAppointment: function (id) {
             return $http.post('http://'+ urlBase + ':8080/SalonManagement/getAppointments', { "intCustID": id }).success(function(response) {
                console.log(response);
              });
         },
         setAvailableEmployee: function(details) {
                empList = details;
         },
         setHomeReservationDetails: function(details, date, time) {
                homeReservationDetails.push({
                  details: details,
                  date: date,
                  time: time
                });
         },
         setAppointmentDetails: function(date, time) {
                appointmentDetails.push({
                  date: date,
                  time: time
                });
         },
         setEmployeeDetails: function(details) {
                employeeDetails = details;
         },
         setCustomerDetails: function(details) {
                customerDetails = details;
         },
         setOrderDetails: function(name, id, quantity, price) {
                orderDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         setServiceDetails: function(name, id, quantity, price) {
                serviceDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         setServiceAppDetails: function(name, id, employee, price) {
                serviceAppDetails.push({
                    name: name,
                    id: id,
                    employee: employee, 
                    price: price
                });
         },
         setPromoDetails: function(name, id, quantity, price) {
                promoDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         setPackageDetails: function(name, id, quantity, price) {
                packageDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         setProductDetails: function(name, id, quantity, price) {
                productDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         getAvailableEmployees: function(){
            return empList;
            console.log(empList);
         },
         getEmployeeDetails: function(){
            return employeeDetails;
         },
         getCustomerDetails: function(){
            return customerDetails;
         },
         getHomeReservationDetails: function(){
            return homeReservationDetails;
         },
         getAppointmentDetails: function(){
            return appointmentDetails;
         },
         getOrderDetails: function(){
            return orderDetails;
         },
         getServiceDetails: function(){
            return serviceDetails;
         },
         getServiceAppDetails: function(){
            return serviceAppDetails;
         },
         getPromoDetails: function(){
            return promoDetails;
         },
         getPackageDetails: function(){
            return packageDetails;
         },
         getProductDetails: function(){
            return productDetails;
         },
         saveAppointment: function(customerDetails, appointmentDetails, selectedService, employeePerService, 
                                        selectedPromo, PromoQuantity, selectedPackage, packageQuantity, 
                                        selectedProduct, productQuantity, total){
          console.log(employeePerService);
            var psdata = {
                          "intCustID": customerDetails.intCustID,
                          "strName": customerDetails.strCustName,
                          "strContactNo": customerDetails.strEmail,
                          "customerType": "APPOINTMENT",
                          "appointmentDate": appointmentDetails[1].date,
                          "appointmentTime": appointmentDetails[1].time,
                          "strTotalPrice": total,
                          "employeeAssigned": employeePerService,
                          "productString": selectedProduct,
                          "serviceString": selectedService,
                          "packageList": selectedPackage,
                          "promoList": selectedPromo,
                          "productQuantity": productQuantity,
                      };
          
              $.ajax({
                  url: 'http://'+ urlBase + ':8080/SalonManagement/createWalkin',
                  type: 'post',
                  data: psdata,
                  dataType: 'json',
                  async: true,
                  success: function (data) {
                    console.log("Success");
                    console.log(psdata);
                    successMessage();
                  },
                  error: function () {
                      console.log("Error in posting");
                      console.log(psdata);
                  }
              });

              function successMessage(){
                var alertPopup2 = $ionicPopup.alert({
                  title:'Appointment successfully created!',
                  template: 'Set another!'
                });

                alertPopup2.then(function(res) {
                  $state.go('tabsController.setAppointment');
                });
              }
                             
         },
         saveVerification: function(varificationCode, verificationID, accountID){
            
            var psdata = {
                          "intVerificationID": details.intLocationID,
                          "strVerificationCode": 1,
                          "intAccountID": productQuantity
                      
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
                  },
                  error: function () {
                      console.log("Error in posting");
                  }
              });
            
                             
         },
         saveProductOrer: function(customerDetails, details, selectedProduct, productQuantity, netTotal){
            var psdata = {
                          "intLocationID": details.intLocationID,
                          "orderType": 1,
                          "productQuantity": productQuantity,
                          "selectedProducts": selectedProduct,
                          "strContactNo": customerDetails.strEmail,
                          "strName": customerDetails.strCustName,
                          "strStreet": details.street,
                          "strTotalPrice": netTotal
                      };
          
              $.ajax({
                  url: 'http://'+ urlBase + ':8080/SalonManagement/createOrder',
                  type: 'post',
                  data: psdata,
                  dataType: 'json',
                  async: true,
                  success: function (data) {
                    console.log("Success");
                    console.log(data);
                    isSuccess();
                  },
                  error: function () {
                      console.log("Error in posting");
                  }
              });

              function isSuccess(){
                  var alertPopup = $ionicPopup.alert({
                  title:'Order successfully created!',
                  template: 'Buy more!'
                });

                alertPopup.then(function(res) {
                  $state.go('tabsController.productOrder');
                });
              }         
         },
         saveHomeReservation: function(customerDetails, homeReservationDetails, selectedService, serviceQuantity, 
                                  selectedPromo, PromoQuantity, selectedPackage, packageQuantity, 
                                  selectedProduct, productQuantity, totalPrice, selectedEmployees){
            console.log("From factory:");
            console.log(PromoQuantity);
            var success = false;
            var total = "";
            total = totalPrice + "";          
            var psdata = {
                          "strName": customerDetails.strCustName,
                          "strAddress": homeReservationDetails[1].details.address,
                          "strContactNo": customerDetails.strEmail,
                          "strEmail": customerDetails.strContactNo,
                          "intReservationType": 1,
                          "datFrom": homeReservationDetails[1].date,
                          "timFrom": homeReservationDetails[1].time,
                          "strVenue": homeReservationDetails[1].details.address,
                          "intLocationID": homeReservationDetails[1].details.selectedLocation.intLocationID,
                          "headCount": homeReservationDetails[1].details.headcount,
                          "strTotalPrice": total,
                          "selectedEmployees": selectedEmployees,
                          "selectedProducts": selectedProduct,
                          "selectedServices": selectedService,
                          "selectedPackages": selectedPackage,
                          "selectedPromos": selectedPromo,
                          "productQuantity": productQuantity,
                          "serviceQuantity": serviceQuantity,
                          "packageQuantity": packageQuantity,
                          "promoQuantity": PromoQuantity,
                      };
          
              $.ajax({
                  url: 'http://'+ urlBase + ':8080/SalonManagement/createReservation',
                  type: 'post',
                  data: psdata,
                  dataType: 'json',
                  async: true,
                  success: function (data) {
                    console.log("Success");
                    console.log(data);
                    
                  },
                  error: function (data) {
                      console.log("Error in posting");
                      console.log(psdata);
                  }
              });

              function isSuccess(){
                var alertPopup3 = $ionicPopup.alert({
                  title:'Reservation successfully created!',
                  template: 'Reserve another!'
                });

                alertPopup3.then(function(res) {
                  $state.go('tabsController.homeReservation');
                });

                serviceDetails = [{}];
                promoDetails = [{}];
                packageDetails = [{}];
                productDetails = [{}];
              }                     
         }
     }
}])
.service('BlankService', [function(){

}]);