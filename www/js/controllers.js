angular.module('app.controllers', [])

// The following are the constructor functions for each page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for these functions
// TIP: Access Route Parameters for your page via $stateParams.parameterName

.controller('symbolismCtrl', ['$scope', '$http', '$stateParams', '$state',
function ($scope, $http, $stateParams, $state) {
  const symbolApi = 'https://dream-symbolism-api.herokuapp.com'
  $scope.symbols = []

  getAllSymbols()

  function getAllSymbols () {
    $http.get(symbolApi).then(allSymbols => {
      $scope.symbols = allSymbols.data
    })
  }

  $scope.showTheme = function (theme) {
    console.log(theme)
    $state.go('menu.showSymbol', {id: theme.id})
  }

}])

.controller('showSymbolCtrl', ['$scope', '$stateParams', '$http',
function ($scope, $stateParams, $http) {
  const symbolApi = 'https://dream-symbolism-api.herokuapp.com'
  $scope.theme = {}
  $http.get(`${symbolApi}/${$stateParams.id}`).then(theme => {
    $scope.theme = theme.data[0]
    console.log($scope.theme)
  })

}])
//////////////////// RESOURCES AND USER STUFF BELOW ///////////////////////////////////////

.controller('calendarCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])



.controller('editDreamsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])
