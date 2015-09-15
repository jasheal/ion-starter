(function() {
    'use strict';

    angular
        .module('app.splash')
        .directive('splashHello', directive);

    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'splash/splash.hello.directive.tpl',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
          // DOM manipulation stuff
        }
    }

    Controller.$inject = [];

    function Controller() {
        var vm = this;

        activate();

        function activate() {
          angular.extend(vm,{
            title: "Hello",
            content: "I'm a directive. I come from $templateCache. I live in the splash component directory and I have my own controller."
          });
        }
    }
})();
