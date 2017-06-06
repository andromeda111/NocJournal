angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //     .state('menu.home', {
  //   url: '/page1',
  //   views: {
  //     'side-menu21': {
  //       templateUrl: 'templates/home.html',
  //       controller: 'homeCtrl'
  //     }
  //   }
  // })

  .state('menu.user', {
    url: '/user',
    views: {
      'side-menu21': {
        templateUrl: 'templates/user.html',
        controller: 'userCtrl'
      }
    }
  })

  .state('menu.showDream', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/showDream.html',
        controller: 'showDreamCtrl'
      }
    }
  })

  // .state('menu.cloud', {
  //   url: '/page3',
  //   views: {
  //     'side-menu21': {
  //       templateUrl: 'templates/cloud.html',
  //       controller: 'cloudCtrl'
  //     }
  //   }
  // })

  .state('menu.calendar', {
    url: '/calendar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('menu.symbolSearch', {
    url: '/symbolSearch',
    views: {
      'side-menu21': {
        templateUrl: 'templates/symbolSearch.html',
        controller: 'symbolSearchCtrl'
      }
    }
  })

  .state('menu.lucidResource', {
    url: '/lucidResource',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lucidResource.html',
        controller: 'lucidResourceCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21')

})
