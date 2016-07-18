define(
  [
    'angular',
    'services/mock.service',
    'components/components.controller',
    'components/field-selector/field-selector.component',
    'components/drop-zones/drop-zones.component',
    'css!./components.css',
  ],
  function(angular, MockService, ComponentsController, fieldSelectorComponent, dropZonesComponent) {
    'use strict';

    var moduleName = 'components';

    angular
      .module(moduleName, [])
      .service('MockService', MockService)
      .controller('ComponentsController', ComponentsController)
      .component(fieldSelectorComponent.name, fieldSelectorComponent.options)
      .component(dropZonesComponent.name, dropZonesComponent.options)

    return {
      name: moduleName
    }
  }
);
