define(
  [
    'angular',
    './services/mock.service',
    './directives/draggable.directive',
    './directives/droppable.directive',
    './visualization.controller',
    './field-selector/field-selector.component',
    './drop-zones/drop-zones.component',
    './drop-zones/drop-zone/drop-zone.component',
    './visualization.component',
    'css!./visualization.css'
  ],
  function(angular, MockService, draggableDirective, droppableDirective, VisualizationController, fieldSelectorComponent, dropZonesComponent, dropZoneComponent, visualizationComponent) {
    'use strict';

    var moduleName = 'visualization';

    angular
      .module(moduleName, [])
      .service('MockService', MockService)
      .controller('VisualizationController', VisualizationController)
      .component(fieldSelectorComponent.name, fieldSelectorComponent.options)
      .component(dropZonesComponent.name, dropZonesComponent.options)
      .component(dropZoneComponent.name, dropZoneComponent.options)
      .component(visualizationComponent.name, visualizationComponent.options)
      .directive(draggableDirective.name, draggableDirective.options)
      .directive(droppableDirective.name, droppableDirective.options);

    return {
      name: moduleName
    }
  }
);
