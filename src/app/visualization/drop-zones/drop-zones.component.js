define(
  [
    'text!./drop-zones.html'
  ],
  function(dropZonesTemplate) {
    var options = {
      bindings: {
        // Inputs
        dropZonesList: '<',

        // Outputs
        onDrop: '&',
        onDragStart: '&',
        onDragStop: '&',
        onRemove: '&'
      },
      template: dropZonesTemplate
    };

    return {
      name: "dropZones",
      options: options
    };
  }
);
