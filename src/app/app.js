define(
  [
    'angular',
    'components/components.module'
  ],
  function(angular, componentsModule) {
    'use strict';

    angular
      .module('app', [componentsModule.name])
  }
);
