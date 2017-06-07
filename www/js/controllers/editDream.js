angular.module('app.editDream', [])

.controller('editDreamsCtrl', ['$scope', '$stateParams', '$ionicUser', '$http',
  function($scope, $stateParams, $ionicUser, $http){
    const apiUrl = 'http://dream-frog.herokuapp.com'


    $scope.editDream = []
    $scope.$onInit = function () {
      // Get function here

      $http.get(apiUrl + id).then(res => {
        $scope.editPost = res.data

      })
    }


    // $scope.editDream = function (dreamId) {
    //   console.log(dreamId);
    //   $http.put(apiUrl + id, $scope.editPost).then(res => {
    //     // $state.go('menu')
    //   })
    // }
  }

])
