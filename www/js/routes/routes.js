angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.homeReservation', {
    url: '/homeReservation',
    views: {
      'tab1': {
        templateUrl: 'templates/homeReservation.html',
        controller: 'homeReservationCtrl'
      }
    }
  })

  .state('tabsController.setAppointment', {
    url: '/setAppointment',
    views: {
      'tab2': {
        templateUrl: 'templates/setAppointment.html',
        controller: 'setAppointmentCtrl'
      }
    }
  })

  .state('tabsController.productOrder', {
    url: '/productOrder',
    views: {
      'tab3': {
        templateUrl: 'templates/productOrder.html',
        controller: 'productOrderCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.chooseService', {
    url: '/chooseService',
    views: {
      'tab1': {
        templateUrl: 'templates/chooseService.html',
        controller: 'chooseServiceCtrl'
      }
    }
  })

  .state('tabsController.chooseServiceApp', {
    url: '/chooseServiceApp',
    views: {
      'tab2': {
        templateUrl: 'templates/chooseServiceApp.html',
        controller: 'chooseServiceAppCtrl'
      }
    }
  })

  .state('tabsController.choosePromo', {
    url: '/choosePromo',
    views: {
      'tab1': {
        templateUrl: 'templates/choosePromo.html',
        controller: 'choosePromoCtrl'
      }
    }
  })

  .state('tabsController.choosePackage', {
    url: '/choosePackage',
    views: {
      'tab1': {
        templateUrl: 'templates/choosePackage.html',
        controller: 'choosePackageCtrl'
      }
    }
  })

  .state('tabsController.chooseProduct', {
    url: '/chooseProduct',
    views: {
      'tab1': {
        templateUrl: 'templates/chooseProduct.html',
        controller: 'chooseProductCtrl'
      }
    }
  })

  .state('tabsController.choosePromoApp', {
    url: '/choosePromo',
    views: {
      'tab2': {
        templateUrl: 'templates/choosePromo.html',
        controller: 'choosePromoCtrl'
      }
    }
  })

  .state('tabsController.choosePackageApp', {
    url: '/choosePackage',
    views: {
      'tab2': {
        templateUrl: 'templates/choosePackage.html',
        controller: 'choosePackageCtrl'
      }
    }
  })

  .state('tabsController.chooseProductApp', {
    url: '/chooseProduct',
    views: {
      'tab2': {
        templateUrl: 'templates/chooseProduct.html',
        controller: 'chooseProductCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.createOrder'
      2) Using $state.go programatically:
        $state.go('tabsController.createOrder');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/createOrder
      /page1/tab3/createOrder
  */
  .state('tabsController.createOrder', {
    url: '/createOrder',
    views: {
      'tab1': {
        templateUrl: 'templates/createOrder.html',
        controller: 'createOrderCtrl'
      },
      'tab3': {
        templateUrl: 'templates/createOrder.html',
        controller: 'createOrderCtrl'
      }
    }
  })

  .state('productDetails', {
    url: '/viewProduct/:name?price?id',
    templateUrl: 'templates/productDetails.html',
    controller: 'productDetailsCtrl'
  })

  .state('tabsController.createAppointment', {
    url: '/createAppointment',
    views: {
      'tab2': {
        templateUrl: 'templates/createAppointment.html',
        controller: 'createAppointmentCtrl'
      }
    }
  })

  .state('tabsController.requestHomeReservation', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/requestHomeReservation.html',
        controller: 'requestHomeReservationCtrl'
      }
    }
  })

  .state('orderSummary', {
    url: '/prouctSummary',
    templateUrl: 'templates/orderSummary.html',
    controller: 'orderSummaryCtrl'
  })

  .state('employeeHome', {
    url: '/empHome',
    templateUrl: 'templates/empHome.html',
    controller: 'jobMonitoringCtrl'
  })

  .state('signUp', {
    url: '/signUp',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('tabsController.chooseProdcutsServices', {
    url: '/homeReservation2',
    params: {
      fromApp: false,
     },
    views: {
      'tab1': {
        templateUrl: 'templates/chooseProdcutsServices.html',
        controller: 'chooseProdcutsServicesCtrl'
      }
    }
  })

  .state('tabsController.chooseProdcutsServicesApp', {
    url: '/homeReservation2',
    params: {
      fromApp: true,
     },
    views: {
      'tab2': {
        templateUrl: 'templates/chooseProdcutsServices.html',
        controller: 'chooseProdcutsServicesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});