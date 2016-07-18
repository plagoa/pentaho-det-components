define(
  [
  ],
  function() {
    
    function fieldItemController() {
      var ctrl = this;

      this.selectItem = function() {
        ctrl.onSelect({ field: ctrl.field });
      }
    }

    return fieldItemController;
  }
);
