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

 /**
  * The App Module
  *
  * The main module of application.
  * The main idea of the module is initialization angular module and loading all necessary dependencies.
  *
  * @module app.module
  * @property {String} name The name of the root angular module.
  * @property {Function} bootstrap The method for bootstraping angular module to the page.
  */
define(
  [
    'angular',
    'tab/tab.module'
  ],
  function(angular, tabModule) {
    'use strict';

    var module = {
      name: "app",
      bootstrap: bootstrap
    };

    activate();

    return module;

    /**
     * Creates and configure main angular module with dependencies
     * @private
     */
    function activate() {
      angular.module(module.name, [tabModule.name])
    }

    /**
     * Bootstraps angular module to the DOM element on the page
     * @private
     * @param {Object} element - The DOM element
     */
    function bootstrap(element) {
      angular.element(element).ready(function() {
        angular.bootstrap(element, [module.name]);
      });
    }
  }
);
