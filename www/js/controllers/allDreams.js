angular.module('app.allDreams', [])

  .controller('allDreamsCtrl', ['$scope', '$stateParams', '$ionicUser', '$http',
    function ($scope, $stateParams, $ionicUser, $http) {
      const apiUrl = 'https://dream-frog.herokuapp.com'
      $scope.userDreamsAll = []

      getUserDreams()

      function getUserDreams () {
        $http.get(apiUrl).then(result => {
          let dreamArrTemp = []
          result.data.forEach(el => {
            if (el['user_username'] === $ionicUser.details.username) {
              dreamArrTemp.push(el)
            }
          })
          $scope.userDreamsAll = dreamArrTemp
        })
      }

      $scope.deleteDream= function (dreamId) {
        console.log(dreamId)
        $http.delete(apiUrl + `dreams/${}`)
      }
    }])
