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
    './tab.component',
    './tab.controller',
    './list-selector/list-selector.module',
    './drop-zones/drop-zones.module',
    './utils/utils-mock.service',
    './utils/utils-draggable.directive',
    './utils/utils-droppable.directive',
    'css!./tab.css'
  ],
  function(angular, tambComponent, tabController, listSelectorModule, dropZonesModule, mockService, draggableDirective, droppableDirective) {
    'use strict';

    var module = {
      name: "tab"
    };

    activate();

    return module;

    /**
     * Creates and configure main angular module with dependencies
     * @private
     */
    function activate() {
      angular
        .module(module.name, [listSelectorModule.name, dropZonesModule.name])
        .component(tambComponent.name, tambComponent.options)
        .controller('TabController', tabController)
        .service('MockService', mockService)
        .directive(draggableDirective.name, draggableDirective.options)
        .directive(droppableDirective.name, droppableDirective.options)
    }
  }
);
