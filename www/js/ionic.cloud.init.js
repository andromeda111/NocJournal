angular.module('ionic.cloud.init', ['ionic.cloud'])

.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "d7df0cff"
    }
  });
})
