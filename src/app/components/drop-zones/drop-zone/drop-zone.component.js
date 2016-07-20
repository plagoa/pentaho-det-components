define(
  [
    'text!./drop-zone.html',
    './drop-zone.controller'
  ],
  function(dropZoneTemplate, dropZoneController) {
    var options = {
        bindings: {
            // Inputs
            dropZone: '<',

            // Outputs
            onDrop: '&',
            onDragStart: '&',
            onDragStop: '&',
            onRemove: '&',
            onChange: '&',
            onReorder: '&',
            onOrderChange: '&'
          },
      template: dropZoneTemplate,
      controller: dropZoneController
    };

    return {
      name: "dropZone",
      options: options
    };
  }
);
