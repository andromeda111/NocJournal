angular.module('app.editDream', [])

.controller('editDreamsCtrl', ['$scope', '$stateParams', '$ionicUser', '$http',
  function($scope, $stateParams, $ionicUser, $http){
    // const apiUrl = 'http://dream-frog.herokuapp.com'
    // console.log(apiUrl);

    // const user = $ionicUser.details.username
    // const id = req.params.id
    // $scope.dream = {}


    // $scope.editDream = []
    $scope.click = function () {
      // $http.get(`${apiUrl}/${user}/${id}`).then(res => {
      //   // $scope.editDream = res.data
      //
      // })
        console.log('hellooooo');
    }

    // $scope.editDream = function (dreamId) {
    //   console.log(dreamId);
    //   $http.put(apiUrl + id, $scope.editDream).then(res => {
    //     // $state.go('menu')
    //   })
    // }
  }

])
