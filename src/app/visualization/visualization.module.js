/*!
 * Copyright 2016 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
