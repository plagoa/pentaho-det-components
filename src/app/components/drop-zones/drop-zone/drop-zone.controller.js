define(
  [
  ],
  function() {
      function dropZoneController() {
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
