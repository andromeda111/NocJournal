angular.module('app.post', [])

.controller('newFormCtrl', ['$scope', '$stateParams', '$http',
  function ($scope, $stateParams, $http) {
    const apiUrl = 'https://dream-frog.herokuapp.com'

    $scope.createDream = function (newDream) {
      console.log('button');
      $http.post(`${apiUrl}/andromeda111/`, newDream).then(result => {
        console.log(newDream, result.data)
      })
    }
  }
])
