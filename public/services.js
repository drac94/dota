angular.module('services', [])
.factory('Items', function($http) {

  return {
    all: function() {
      return $http({
        method: 'GET',
        url: '/api/items'
      })
    }
  };
});
