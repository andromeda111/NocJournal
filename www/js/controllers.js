angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('showDreamCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    const apiUrl = 'https://dream-frog.herokuapp.com'
    $scope.dreamsArr = []
  
  $scope.getUserDreams = function () {
    
    console.log('Get Stuff Button Works!');
    
    $http.get(apiUrl).then(result => {
      console.log(result);
      
      let userDreams = []
      result.data.forEach(el => {
          console.log(el)
          if (el['id'] === 2) {
              userDreams.push(el)
          }
      })
      
    //   let userDreams = result.data.filter(function () {
    //       return username === $scope.userData.username
    //   })
      console.log(userDreams)
      $scope.dreamsArr = userDreams
    })
  }

//   $scope.deleteDreams= function () {
//     let del = $scope.dreamsArr.length - 1
//     $http.delete(apiUrl + `dreams/4`)
//   }
  
}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicSideMenuDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $ionicSideMenuDelegate) {
  
  	// Updated on 1/9/2017 to fix issues with logging
    // out and back in, as well as history issues with side menu + tabs.
  	function checkLoggedIn(){
        if ($ionicAuth.isAuthenticated()) {
            // Make sure the user data is going to be loaded
            
            $ionicUser.load().then(function() {
            	$scope.userData = $ionicUser.details;
            	console.log('logged in')
            });
        }else{
        	$scope.userData = {}; 
        }
    }
    
    checkLoggedIn();
    
    $scope.$on('login_change', checkLoggedIn);

    $scope.logout = function(){
        console.log('logout button clicked')
        $ionicAuth.logout();
      	// Updated on 1/9/2017 to make sure the menu closes when
        // you log out so that it's closed if you log back in.
     		$ionicSideMenuDelegate.toggleLeft(false);
        $state.go('login');
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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
        $state.go('menu.home');  
      });
    }
    
    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
          	$rootScope.$broadcast('login_change');
            $state.go('menu.home');
        }, function(data){
            console.log(data)
            $scope.error = 'Error logging in.';
        })
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state, $ionicHistory, $rootScope) {
    
    $scope.data = {
        'name': '',
        'email': '',
        'password': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        
        $scope.error = '';

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
              $state.go('menu.home');
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
 