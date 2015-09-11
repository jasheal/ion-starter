(function() {
    'use strict';

    angular
        .module('app.splash')
        .controller('SplashController', SplashController);

    SplashController.$inject = ['SplashService'];

    function SplashController(SplashService) {
        var vm = this;

        activate();

        function activate() {
          SplashService.getSplashData().then(function(res){

            angular.extend(vm,{
              title: res.title,
              content: res.content
            });

            console.log(res);
          });
        }
    }
})();
