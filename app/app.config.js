(function() {
    'use strict';

    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('splash', {
            url: '/splash',
            templateUrl: 'splash/splash.tpl',
            controller: 'SplashController as splash'

          });

        $urlRouterProvider
          .otherwise('/splash')
    }
})();
