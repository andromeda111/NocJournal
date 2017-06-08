angular.module('app.controllers', [])

// The following are the constructor functions for each page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for these functions
// TIP: Access Route Parameters for your page via $stateParams.parameterName

.controller('symbolismCtrl', ['$scope', '$http', '$stateParams',
function ($scope, $http, $stateParams) {
  const symbolApi = 'https://dream-symbolism-api.herokuapp.com'
  $scope.symbols = []

  getAllSymbols()

  function getAllSymbols () {
    $http.get(symbolApi).then(allSymbols => {
      $scope.symbols = allSymbols.data
    })
  }

  // $scope.getOneSymbol = function () {
  //   $http.get(`${symbolApi}/`)
  // }

}])

//////////////////// RESOURCES AND USER STUFF BELOW ///////////////////////////////////////

.controller('calendarCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])


.controller('lucidCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])

.controller('editDreamsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])
