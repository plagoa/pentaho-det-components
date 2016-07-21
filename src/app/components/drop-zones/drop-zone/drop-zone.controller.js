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


          return {
              dropZoneSize: dropZoneSize,
         }

      }
      return dropZoneController;
  }
);
