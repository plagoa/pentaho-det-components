define(
  [
    'text!./field-selector.html'
  ],
  function(fieldSelectorTemplate) {

    var options = {
      bindings: {
        fields: '<',
        categories: '<',
        onFieldSelected: '&',
        onDragStart: '&'
      },
      template: fieldSelectorTemplate
    };

    return {
      name: "fieldSelector",
      options: options
    };
  }
);
