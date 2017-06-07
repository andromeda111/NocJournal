angular.module('app.editDreams', [])

.controller('editDreamsCtrl', ['$scope', '$stateParams', '$ionicUser', '$http',
  function($scope, $stateParams, $ionicUser, $http){
    const user = $ionicUser.details.username
    const id = $stateParams.id
    const apiUrl = 'http://dream-frog.herokuapp.com'

    $scope.dream = []
    $scope.editDream = []
    $http.get(apiUrl + `/${user}/${id}`).then(res => {
      console.log(res.data);
      $scope.dream = res.data['0']
    })

    // $scope.editDream = $scope.dream
    console.log($scope.dream);

    // $scope.editDream = []
    $scope.click = function () {
      $http.get(`${apiUrl}/${user}/${id}`).then(res => {
        // $scope.editDream = res.data

      })
        // console.log('hellooooo');
    }

    $scope.editDream = function (dreamId) {
      console.log(dreamId);
      $http.put(apiUrl + id, $scope.dream).then(res => {
        console.log(res);
        // $state.go('menu')
      }).catch(err => {
        console.error(err);
      })
    }

  }])
