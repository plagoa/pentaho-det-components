define(
  [
  ],
  function() {
      function dropZoneController() {
          function dropZoneSize() {
              if ( this.maxFields && this.maxFields > 0 ) {
                  var currentFieldsLength = 0;
                  if ( this.currentFields ) {
                      currentFieldsLength = this.currentFields.length;
                  }
                  alert(currentFieldsLength);
                  return Math.min(this.maxFields, Math.max(3, currentFieldsLength +1));
              }
              return 0;
          }

          return {
              dropZoneSize: dropZoneSize
          }
          
      }
      return dropZoneController;
  }
);
