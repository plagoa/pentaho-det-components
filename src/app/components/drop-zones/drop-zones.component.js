define(
  [
    './drop-zones.controller'
  ],
  function(dropZonesController) {

    var options = {
      template: '<h1>Component</h1><h2>{{ $ctrl.name }} !</h2>',
      controller: dropZonesController
    };

    return {
      name: "dropZones",
      options: options
    };
  }
);
