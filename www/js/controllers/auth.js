angular.module('app.auth', [])

.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicHistory', '$rootScope',
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $ionicHistory, $rootScope) {

    $scope.data = {
        'email': '',
        'password': ''
    }

    $scope.error = '';

    if ($ionicAuth.isAuthenticated()) {
      // Updated on 1/9/2017 to fix issues with logging
      // out and back in, as well as history issues with side menu + tabs.
      $ionicUser.load().then(function() {
        $rootScope.$broadcast('login_change');
        $ionicHistory.nextViewOptions({
          historyRoot: true
        });
        $state.go('menu.allDreams');
      });
    }

    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
          	$rootScope.$broadcast('login_change');
            $state.go('menu.allDreams');
        }, function(data){
            console.log(data)
            $scope.error = 'Invalid login';
        })
    }

}])

.controller('signupCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', '$ionicHistory', '$rootScope',
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state, $ionicHistory, $rootScope) {

    $scope.data = {
        'name': '',
        'email': '',
        'password': ''
    }

    $scope.error='';

    $scope.signup = function(){

        $scope.error = ''
        const email = $scope.data.email
        const user = $scope.data.username
        const pw = $scope.data.password

        if (!email){
          $scope.error = 'Email is invalid'
          return
        }

        if (!user || user.length < 4){
          $scope.error = 'Username should be at least 4 characters'
          return
        }

        if (!pw || pw.length < 6){
          $scope.error = 'Password should be at least 6 characters'
          return
        }

        $ionicAuth.signup($scope.data).then(function() {
            // `$ionicUser` is now registered
            $ionicAuth.login('basic', $scope.data).then(function(){

              // Updated on 1/9/2017 to fix issues with logging
    					// out and back in, as well as history issues with
              // side menu + tabs.
              $rootScope.$broadcast('login_change');
              $ionicHistory.nextViewOptions({
                historyRoot: true
              });
              $state.go('menu.allDreams');
            });
        }, function(err) {

            var error_lookup = {
                'required_email': 'Missing email field',
                'required_password': 'Missing password field',
                'conflict_email': 'A user has already signed up with that email',
                'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation'
            }

            $scope.error = error_lookup[err.details[0]];
        });
    }

}])
