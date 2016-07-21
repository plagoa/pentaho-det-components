define(
  [
    'angular',
    'visualization/visualization.module'
  ],
  function(angular, componentsModule) {
    'use strict';

    angular
      .module('app', [componentsModule.name])
  }
);
