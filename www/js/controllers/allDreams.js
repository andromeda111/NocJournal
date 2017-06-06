angular.module('app.allDreams', [])


.controller('allDreamsCtrl', ['$scope', '$stateParams', '$http',
function ($scope, $stateParams, $http) {

    const apiUrl = 'https://dream-frog.herokuapp.com'
    $scope.dreamsArr = []

  $scope.getUserDreams = function () {

    console.log('Get Stuff Button Works!');

    $http.get(apiUrl).then(result => {
      console.log(result);

      let userDreams = []
      result.data.forEach(el => {
          console.log(el)
          if (el['id'] === 2) {
              userDreams.push(el)
          }
      })

    //   let userDreams = result.data.filter(function () {
    //       return username === $scope.userData.username
    //   })
      console.log(userDreams)
      $scope.dreamsArr = userDreams
    })
  }

//   $scope.deleteDreams= function () {
//     let del = $scope.dreamsArr.length - 1
//     $http.delete(apiUrl + `dreams/4`)
//   }

}])
