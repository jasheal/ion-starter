(function() {
    'use strict';

    angular
        .module('app')
        .run(Run);

    Run.$inject = ['$ionicPlatform'];

    function Run($ionicPlatform) {

      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
        console.log('Running...')
      });
    }
})();
