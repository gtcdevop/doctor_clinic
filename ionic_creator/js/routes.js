angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.manejoDeSintomas', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/manejoDeSintomas.html',
        controller: 'manejoDeSintomasCtrl'
      }
    }
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.respostas', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/respostas.html',
        controller: 'respostasCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pgsim'
      2) Using $state.go programatically:
        $state.go('tabsController.pgsim');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.pgsim', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/pgsim.html',
        controller: 'pgsimCtrl'
      },
      'tab2': {
        templateUrl: 'templates/pgsim.html',
        controller: 'pgsimCtrl'
      }
    }
  })

  .state('pgnao', {
    url: '/page9',
    templateUrl: 'templates/pgnao.html',
    controller: 'pgnaoCtrl'
  })

  .state('page', {
    url: '/page10',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});