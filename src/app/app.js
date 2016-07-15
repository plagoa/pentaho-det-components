define(
  [
    'angular',
    'components/components.module',
    'angular-route'
  ],
  function(angular, componentsModule) {
    'use strict';

    angular
      .module('app', ['ngRoute', componentsModule.name])
      .config(config);

    function config($routeProvider) {

      $routeProvider.
        when('/field-selector', {
          template: '<field-selector></field-selector>'
        }).
        when('/drop-zones', {
          template: '<drop-zones></drop-zones>'
        }).
        otherwise({
          redirectTo: '/field-selector'
        });
    }
  }
);
