angular.module('app.user', [])

.controller('userCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicUser',
  function ($scope, $stateParams, $http, $state, $ionicUser) {
    const user = $ionicUser.details.username
    const apiUrl = 'https://dream-frog.herokuapp.com'
    $scope.all = []
    getStats()

    function getStats () {
      $http.get(`${apiUrl}/${user}/`).then(result => {
        $scope.all = result.data
        $scope.all.nightmareCounter = 0
        $scope.all.recurringCounter = 0

        $scope.all.emotionCounter = {confused: 5, excited: 0 }
        // console.log($scope.all.emotionCounter.confused)
// consider turning the counter into a map, ++ to each item in the array 
        $scope.all.forEach(dream => {
          dream.nightmare ? $scope.all.nightmareCounter++ : $scope.all.nightmareCounter
          dream.recurring ? $scope.all.recurringCounter++ : $scope.all.recurringCounter
          // dream.emotion ? $scope.all.emotionCounter.confused ++ : $scope.all.emotionCounter.confused
        })
      })
    }
  }
])

// silly, confused, anxious, afraid, frustrated, angry, sad, indifferent, aroused}
