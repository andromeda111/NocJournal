angular.module('app.menu', [])


.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicSideMenuDelegate',
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
        	$scope.userData = {}
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
