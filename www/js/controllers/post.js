angular.module('app.post', [])

.controller('newFormCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicUser',
  function ($scope, $stateParams, $http, $state, $ionicUser) {
    const user = $ionicUser.details.username
    const apiUrl = 'https://dream-frog.herokuapp.com'
    $scope.newDream = {}
    $scope.newDream.dream_date = new Date()

    $scope.newDream.lucidity = 0
    $scope.newDream.nightmare = false
    $scope.newDream.recurring = false

    $scope.createDream = function (newDream) {
      $http.post(`${apiUrl}/${user}/`, newDream).then(result => {
        $state.go('menu.allDreams')
      })
    }

    // Speech to text variables and fn
    $scope.dreamStringArray = []
    $scope.dreamString = ''

    $scope.record = function () {
      var recognition = new webkitSpeechRecognition() // To Computer
      // var recognition = new SpeechRecognition() // To Device, iPhone?
      recognition.lang = '' // Defaults to device lang setting

      recognition.onresult = function(event) {
        if (event.results.length > 0) {
          let str = event.results[0][0].transcript

          // Add profanity back in  ^_____^
          str = str.replace("f******", "fucking")
          str = str.replace("f***", "fuck")
          str = str.replace("b*******", "bitching")
          str = str.replace("b****", "bitch")
          str = str.replace("s*******", "shitting")
          str = str.replace("s***", "shit")
          str = str.replace("a******", "asshole")

          const firstLetter = str.substring(0, 1).toUpperCase()
          const everythingElse = str.substring(1)

          $scope.recognizedText = firstLetter + everythingElse
          const a = $scope.recognizedText

          if (a.substring(a.length - 1) !== ".") {
            $scope.recognizedText += "."
          }

          $scope.dreamStringArray.push($scope.recognizedText)
          $scope.dreamString = $scope.dreamStringArray.join(" ")

          $scope.newDream.body = $scope.dreamString

          $scope.$apply()
        }
      }

      recognition.start()
    }

  }
])
