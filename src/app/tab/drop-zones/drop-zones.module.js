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
    './drop-zones.component',
    './drop-zone/drop-zone.component'
  ],
  function(angular, dropZonesComponent, dropZoneComponent) {
    'use strict';

    var module = {
      name: "drop.zones"
    };

    activate();

    return module;

    /**
     * Creates and configure angular module with dependencies
     * @private
     */
    function activate() {
      angular
        .module(module.name, [])
        .component(dropZonesComponent.name, dropZonesComponent.options)
        .component(dropZoneComponent.name, dropZoneComponent.options);
    }
  }
);
