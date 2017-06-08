angular.module('app.showDream', [])

  .controller('showDreamCtrl', ['$scope', '$stateParams', '$ionicUser', '$http', '$state',
    function ($scope, $stateParams, $ionicUser, $http, $state) {
      const apiUrl = 'https://dream-frog.herokuapp.com'
      const user = $ionicUser.details.username
      const id = $stateParams.id
      $scope.dream = {}

      getOneDream()

      function getOneDream () {
        $http.get(apiUrl + `/${user}` + `/${id}`)
          .then(result => {
            const dream = result.data[0]
            let emotionStr = dream.emotion

            if (dream.nightmare) {
              dream.nightmare = 'Yes'
            } else {
              dream.nightmare = 'No'
            }

            if (dream.recurring) {
              dream.recurring = 'Yes'
            } else {
              dream.recurring = 'No'
            }

            if (emotionStr) {
              const firstLetter = emotionStr.substring(0, 1).toUpperCase()
              const everythingElse = emotionStr.substring(1)
              dream.emotion = firstLetter + everythingElse
            } else {
              dream.emotion = "None"
            }

            $scope.dream = dream
          })
      }

      $scope.editDream = function (dream) {
        const id = dream.id
        const username = dream['user_username']
        $state.go('menu.editDream', {id: id})
      }

    }])
