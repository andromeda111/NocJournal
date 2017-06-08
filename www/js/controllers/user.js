angular.module('app.user', [])

.controller('userCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicUser',
  function ($scope, $stateParams, $http, $state, $ionicUser) {
    const user = $ionicUser.details.username
    const apiUrl = 'https://dream-frog.herokuapp.com'

    getStats()

    function getStats () {
      $http.get(`${apiUrl}/${user}/`).then(result => {
        console.log(result.data)
      })
    }
  }
])
