angular.module('app.editDreams', [])

.controller('editDreamsCtrl', ['$scope', '$stateParams', '$ionicUser', '$http','$state',
  function($scope, $stateParams, $ionicUser, $http, $state){
    const user = $ionicUser.details.username
    const id = $stateParams.id
    const apiUrl = 'http://dream-frog.herokuapp.com'

    $scope.updateDream = []
    $scope.editDream = []
    $http.get(apiUrl + `/${user}/${id}`).then(res => {
      console.log(res.data);
      $scope.updateDream = res.data['0']
    })

    // $scope.editDream = $scope.updateDream
    console.log($scope.updateDream);

    // $scope.editDream = []
    $scope.click = function () {
      $http.get(`${apiUrl}/${user}/${id}`).then(res => {
        // $scope.editDream = res.data

      })
        // console.log('hellooooo');
    }

    $scope.editDream = function (updateDream) {
      console.log(updateDream);
      $http.put(apiUrl + `/${user}/${id}`, updateDream).then(res => {
      $state.go('menu.allDreams')
      }).catch(err => {
        console.error(err);
      })
    }

  }])
