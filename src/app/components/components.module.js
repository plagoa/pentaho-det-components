define(
  [
    'angular',
    'components/field-selector/field-selector.component',
    'components/drop-zones/drop-zones.component',
    'components/field-selector/field-item/field-item.component',
    'services/mock.service'
  ],
  function(angular, fieldSelectorComponent, dropZonesComponent, fieldItemComponent, mockService) {
    'use strict';

    var moduleName = 'components';

    angular
      .module(moduleName, [])
      .component(fieldSelectorComponent.name, fieldSelectorComponent.options)
      .component(dropZonesComponent.name, dropZonesComponent.options)
      .component(fieldItemComponent.name, fieldItemComponent.options)
      .service('mockService', mockService);

    return {
      name: moduleName
    }
  }
);
