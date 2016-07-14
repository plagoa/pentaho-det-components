define(
  [
    'angular',
    'services/mock.service',
    'components/field-selector/field-selector.component',
    'components/drop-zones/drop-zones.component',
    'angular-route'
  ],
  function(angular, mockService, fieldSelectorComponent, dropZonesComponent) {
    'use strict';

    angular
      .module('app', ['ngRoute'])
      .component(fieldSelectorComponent.name, fieldSelectorComponent.options)
      .component(dropZonesComponent.name, dropZonesComponent.options)
      .service('mockService', mockService)
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
