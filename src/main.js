require.config({

  baseUrl: '/app',

  paths: {
    'jquery'				    : '../bower_components/jquery/dist/jquery',
    'angular'				    : '../bower_components/angular/angular',
    'text'              : '../bower_components/text/text',
    'css'               : '../bower_components/require-css/css'
  },

  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    }
  }
});

// Start the main app logic.
require(['app'], function() {

  angular.bootstrap(document.body, ['app']);
});
