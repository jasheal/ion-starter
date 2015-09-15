(function() {
    'use strict';

    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider) {

        // here we can define the main routes and move component specific routes to their folder.

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
