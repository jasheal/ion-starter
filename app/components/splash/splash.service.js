(function() {
    'use strict';

    angular
        .module('app.splash')
        .factory('SplashService', SplashService);

    SplashService.$inject = ['$q'];

    function SplashService($q) {
        var service = {
            getSplashData: getSplashData
        };

        return service;

        function getSplashData() {
          var defer = $q.defer();

          var data = {
            title: "Splash View!",
            content: "This template has been retrieved from the template cache and was minimised"
          }
          defer.resolve(data)

          return defer.promise
        }
    }
})();
