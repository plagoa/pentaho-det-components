require.config({

  baseUrl: '/app',

  paths: {
    'jquery'				    : '../bower_components/jquery/dist/jquery',
    'angular'				    : '../bower_components/angular/angular',
    'angular-route'			: '../bower_components/angular-route/angular-route',
    'text'              : '../bower_components/text/text'
  },

  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },
    'angular-route': ['angular']
  }
});

// Start the main app logic.
require(['app'], function() {

  angular.bootstrap(document.body, ['app']);
});
