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
  ],
  function() {
      function dropZoneController() {
          'use strict';
        
          function dropZoneSize() {
              if ( this.dropZone.maxFields && this.dropZone.maxFields > 0 ) {
                  var currentFieldsLength = 0;
                  if ( this.dropZone.currentFields ) {
                      currentFieldsLength = this.dropZone.currentFields;
                  }
                  return Math.min(this.dropZone.maxFields, Math.max(3, currentFieldsLength +1));
              }
              return 0;
          }

          function allowDrop(ev) {
              ev.preventDefault();
          }

          function drag(ev) {
              ev.dataTransfer.setData("text", ev.target.id);
          }

          function drop(ev) {
              ev.preventDefault();
              var data = ev.dataTransfer.getData("text");
              ev.target.appendChild(document.getElementById(data));
          }

          return {
              dropZoneSize: dropZoneSize,
              allowDrop: allowDrop,
              drag: drag,
              drop: drop
          }

      }
      return dropZoneController;
  }
);
