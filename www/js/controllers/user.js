angular.module('app.user', [])

.controller('userCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicUser',
  function ($scope, $stateParams, $http, $state, $ionicUser) {
    const user = $ionicUser.details.username
    const apiUrl = 'https://dream-frog.herokuapp.com'

    $scope.chartObject = {};

$scope.chartObject.type = "PieChart";

$scope.chartObject.data = {
    "cols": [
        { id: "t", label: "Emotions", type: "string" },
        { id: "s", label: "Occurence", type: "number" }
    ], "rows": [
        {
            c: [
               { v: "One" },
               { v: 1 },
            ]
        },
        {
            c: [
               { v: "Two" },
               { v: 2 }
            ]
        },
        {
            c: [
               { v: "Three" },
               { v: 3 },
            ]
        },
        {
            c: [
               { v: "Four" },
               { v: 1 },
            ]
        },
        {
            c: [
               { v: "Five" },
               { v: 1 },
            ]
        },
        {
            c: [
               { v: "Six" },
               { v: 6 }
            ]
        },
        {
            c: [
               { v: "Seven" },
               { v: 5 },
            ]
        },
        {
            c: [
               { v: "Eight" },
               { v: 1 },
            ]
        },
        {
            c: [
               { v: "Nine" },
               { v: 7 },
            ]
        },
        {
            c: [
               { v: "Ten" },
               { v: 5 },
            ]
        }
    ]
};

$scope.chartObject.options = {
    'legend':'bottom',
    // 'title':'Dream History Analysis',
    'is3D':false,
    'sliceVisibilityThreshold': 0.1,
    'width':350,
    'height':300,
    'colors': ['#182033', '#273453', '#34466F', '#41578B', '#4E69A6', '#667FB7', '#8296C4', '#9EADD1', '#BAC5DE', '#D5DCEB']
};

//     $scope.all = []
//     getStats()
//
//     function getStats () {
//       $http.get(`${apiUrl}/${user}/`).then(result => {
//         $scope.all = result.data
//         $scope.all.nightmareCounter = 0
//         $scope.all.recurringCounter = 0
//
//         $scope.all.emotionCounter = {confused: 5, excited: 0 }
//         // console.log($scope.all.emotionCounter.confused)
// // consider turning the counter into a map, ++ to each item in the array
//         $scope.all.forEach(dream => {
//           dream.nightmare ? $scope.all.nightmareCounter++ : $scope.all.nightmareCounter
//           dream.recurring ? $scope.all.recurringCounter++ : $scope.all.recurringCounter
//           // dream.emotion ? $scope.all.emotionCounter.confused ++ : $scope.all.emotionCounter.confused
//         })
//       })
//     }
  }
])

// silly, confused, anxious, afraid, frustrated, angry, sad, indifferent, aroused}
