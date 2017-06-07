angular.module('app.editDream', [])

.controller('editDreamCtrl', ['$scope', '$stateParams', '$ionicUser', '$http',
  function($scope, $stateParams, $ionicUser, $http){
    const apiUrl = 'http://dream-frog.herokuapp.com'
    const vm = this

    $scope.editDream = []

    vm.$onInIt = function () {
      // Get function here

      $http.get(`${apiUrl}/andromeda111/2`).then(res => {
        vm.editPost = res.data
      })
    }

    vm.editPost = function () {
      $http.put(apiUrl + id, vm.editPost).then(res => {
        $state.go('menu.user')
      })
    }
  }

])
