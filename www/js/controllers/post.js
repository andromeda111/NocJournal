angular.module('app.post', [])

.controller('newFormCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicUser',
  function ($scope, $stateParams, $http, $state, $ionicUser) {
    const user = $ionicUser.details.username
    const apiUrl = 'https://dream-frog.herokuapp.com'
    $scope.newDream = {}
    $scope.newDream.dream_date = new Date()

    $scope.newDream.lucidity = 0
    $scope.newDream.nightmare = false
    $scope.newDream.recurring = false
    console.log(user)

    $scope.createDream = function (newDream) {
      $http.post(`${apiUrl}/${user}/`, newDream).then(result => {
        $state.go('menu.allDreams')
      })
    }
  }
])
