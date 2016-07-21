var dota = angular.module('dota', ['services']);

function mainController($scope, Items) {
    // when landing on the page, get all todos and show them
    Items.all().then(function successCallback(response) {
      console.log(response.data);
      $scope.items = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });

}
