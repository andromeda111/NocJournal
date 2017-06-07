angular.module('app.showDream', [])

  .controller('showDreamCtrl', ['$scope', '$stateParams', '$ionicUser', '$http',
    function ($scope, $stateParams, $ionicUser, $http) {
      const apiUrl = 'https://dream-frog.herokuapp.com'
      const user = $ionicUser.details.username
      const id = req.params.id
      $scope.dream = {}

      getOneDream()

      function getOneDream () {
        $http.get(apiUrl + '/' + `${user}` + '/' + `${id}`)
          .then(dream => {
            if (dream.nightmare) {
              dream.nightmare = 'Yes'
            } else {
              dream.nightmare = 'No'
            }

            if (dream.reoccurring) {
              dream.reoccurring = 'Yes'
            } else {
              dream.reoccurring = 'No'
            }

            $scope.dream = dream
          }).catch(err => {
            throw err
          })
      }
    }])
