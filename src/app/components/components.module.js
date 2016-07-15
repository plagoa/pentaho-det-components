define(
  [
    'angular',
    'components/field-selector/field-selector.component',
    'components/drop-zones/drop-zones.component',
    'services/mock.service'
  ],
  function(angular, fieldSelectorComponent, dropZonesComponent, mockService) {
    'use strict';

    var moduleName = 'components';

    angular
      .module(moduleName, [])
      .component(fieldSelectorComponent.name, fieldSelectorComponent.options)
      .component(dropZonesComponent.name, dropZonesComponent.options)
      .service('mockService', mockService);

    return {
      name: moduleName
    }
  }
);
