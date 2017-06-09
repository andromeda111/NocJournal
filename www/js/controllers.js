angular.module('app.controllers', [])


.controller('symbolismCtrl', ['$scope', '$http', '$stateParams', '$state',
function ($scope, $http, $stateParams, $state) {
  const symbolApi = 'https://dream-symbolism-api.herokuapp.com'
  $scope.symbols = []

  getAllSymbols()

  function getAllSymbols () {
    $http.get(symbolApi).then(allSymbols => {
      console.log(allSymbols);
      $scope.symbols = allSymbols.data
    })
  }

  $scope.showTheme = function (theme) {
    $state.go('menu.showSymbol', {id: theme.id})
  }

}])

.controller('showSymbolCtrl', ['$scope', '$stateParams', '$http',
function ($scope, $stateParams, $http) {
  const symbolApi = 'https://dream-symbolism-api.herokuapp.com'
  $scope.theme = {}
  $http.get(`${symbolApi}/${$stateParams.id}`).then(theme => {
    $scope.theme = theme.data[0]
  })
}])
