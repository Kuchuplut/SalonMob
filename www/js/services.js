angular.module('app.services', [])

.factory('dataFactory', ['$http', function($http){
	 var urlBase = 'http://localhost:8080/SalonManagement/';
     var orderDetails = [{}];
     var serviceDetails = [{}];
     var promoDetails = [{}];
     var packageDetails = [{}];
	 return {
         getLocation: function () {
            return $http.get(urlBase + 'api/v1/getAllLocation').then(function (data) {
                 return data;
             });
         },
         getProducts: function () {
             return $http.get(urlBase + 'api/v1/getAllProduct').then(function (data) {
                 return data;
             });
         },
         getEmployees: function () {
             return $http.get(urlBase + 'api/v1/getAllEmployee').then(function (data) {
                 return data;
             });
         },
         getServices: function () {
             return $http.get(urlBase + 'api/v1/getAllService').then(function (data) {
                 return data;
             });
         },
         getPromos: function () {
             return $http.get(urlBase + 'getAllPromoNoDetails').then(function (data) {
                 return data;
             });
         },
         getPromosWithDetails: function () {
             return $http.get(urlBase + 'api/v1/getAllPromo').then(function (data) {
                 return data;
             });
         },
         getPackages: function () {
             return $http.get(urlBase + 'getPackageNoDetails').then(function (data) {
                 return data;
             });
         },
         getPackagesWithDetails: function () {
             return $http.get(urlBase + 'api/v1/getAllPackage').then(function (data) {
                 return data;
             });
         },
         getExtraCharges: function () {
             return $http.get(urlBase + 'api/v1/getAllOtherCharge').then(function (data) {
                 return data;
             });
         },
         getDiscounts: function () {
             return $http.get(urlBase + 'getAllDiscountNoDetails').then(function (data) {
                 return data;
             });
         },
         getRequest: function () {
             return $resource(urlBase + 'getAllProductRequest').get().$promise.then(function (data) {
                 return data;
             });
         },
         getOrders: function() {
             return $resource(urlBase + 'orders').get().$promise.then(function (data) {
                 return data;
             });
         },
         getReservations: function() {
             return $resource(urlBase + 'getAllReservationNoDetails').get().$promise.then(function (data) {
                return data; 
             });
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
         setPromoDetails: function(name, id, quantity, price) {
                promoDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         setPackageDetails: function(name, id, quantity, price) {
                packgeDetails.push({
                    name: name,
                    id: id,
                    quantity: quantity, 
                    price: price
                });
         },
         getOrderDetails: function(){
            return orderDetails;
         },
         getServiceDetails: function(){
            return serviceDetails;
         },
         getPromoDetails: function(){
            return promoDetails;
         },
         getPackageDetails: function(){
            return packageDetails;
         },
         saveProductOrer: function(details, selectedProduct, productQuantity, netTotal){
            var psdata = {
                          "intLocationID": details.intLocationID,
                          "orderType": 1,
                          "productQuantity": productQuantity,
                          "selectedProducts": selectedProduct,
                          "strContactNo": details.number,
                          "strName": details.name,
                          "strStreet": details.street,
                          "strTotalPrice": netTotal
                      };
          
              $.ajax({
                  url: 'http://localhost:8080/SalonManagement/createOrder',
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
         saveHomeReservation: function(){
            var psdata = {
                          "intLocationID": details.intLocationID,
                          "orderType": 1,
                          "productQuantity": productQuantity,
                          "selectedProducts": selectedProduct,
                          "strContactNo": details.number,
                          "strName": details.name,
                          "strStreet": details.street,
                          "strTotalPrice": netTotal
                      };
          
              $.ajax({
                  url: 'http://localhost:8080/SalonManagement/createOrder',
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
                             
         }
     }
}])
.service('BlankService', [function(){

}]);