angular.module('app.editDreams', [])

.controller('editDreamsCtrl', ['$scope', '$stateParams', '$ionicUser', '$http','$state',
  function($scope, $stateParams, $ionicUser, $http, $state){
    const user = $ionicUser.details.username
    const id = $stateParams.id
    const apiUrl = 'http://dream-frog.herokuapp.com'

    $scope.updateDream = {}

    $http.get(apiUrl + `/${user}/${id}`).then(res => {
      $scope.updateDream = res.data['0']
      $scope.updateDream.dream_date = new Date($scope.updateDream.dream_date)
    })

    $scope.editDream = function (updateDream) {
      $http.put(`${apiUrl}/${user}/${id}/`, updateDream).then(res => {
        $state.go('menu.showDream', {id: id})
      })
    }

  }])
