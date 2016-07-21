angular.module('services', [])
.factory('Items', function($http) {

  return {
    all: function() {
      return $http({
        method: 'JSONP',
        //50B4D30006061AE4BEA9C4A9EB42F421 this is my APi Key, use it with wisdom
        url: 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=50B4D30006061AE4BEA9C4A9EB42F421&language=en_us&format=JSONP'
        //url: 'http://www.dota2.com/jsfeed/itemdata'
      })
    }
  };
});
