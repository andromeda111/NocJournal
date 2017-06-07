angular.module('app.post', [])

.controller('newFormCtrl', ['$scope', '$stateParams', '$http', '$state',
  function ($scope, $stateParams, $http, $state) {
    const apiUrl = 'https://dream-frog.herokuapp.com'
    $scope.newDream = {}
    $scope.newDream.lucidity = 0
    $scope.newDream.nightmare = false
    $scope.newDream.recurring = false

    $scope.createDream = function (newDream) {
      console.log('button')
      $http.post(`${apiUrl}/missalyss/`, newDream).then(result => {
        $state.go('menu.allDreams')
      })
    }
  }
])
