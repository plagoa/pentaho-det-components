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
    './services/mock.service'
  ],
  function(MockService) {
    'use strict';

    visualizationController.$inject = ["$element", "MockService"];

    function visualizationController($element, MockService) {

      function getFields() {
        return MockService.getFields();
      }

      function getCategories() {
        return MockService.getCategories();
      }

      function getDropZones() {
        return MockService.getDropZones();
      }

      function onFieldSelected(field) {
        MockService.fieldSelected(field);
      }

      function onDragStart(field) {
        console.log("Drag started >", field);
        event.dataTransfer.setData("fieldId", field.id);
      }

      function onDragStop(field) {
        console.log("Drag stopped >", field);
      }

      function onRemove(dropZoneId, fieldId) {
        MockService.dropZoneFieldRemove(dropZoneId, fieldId);
      }

      function onDrop(dropZoneId) {
        var fieldId = event.dataTransfer.getData("fieldId");
        event.target.appendChild(document.getElementById(fieldId));
        console.log("FieldId: " + fieldId + " was dropped on dropzone >", dropZoneId);
      }

      function onDragover(dropZone) {
        if(dropZone.maxFields > dropZone.currentFields.length) {
          event.preventDefault();
        }
      }

      return {
        fields: getFields(),
        categories: getCategories(),
        dropZones: getDropZones,
        onFieldSelected: onFieldSelected,
        onDragStart: onDragStart,
        onDragStop: onDragStop,
        onRemove: onRemove,
        onDrop: onDrop,
        onDragover: onDragover
      }
    }

    return visualizationController;
  }
);
