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
        onDragStart: '&',
        onDragStop: '&'
      },
      template: fieldSelectorTemplate
    };

    return {
      name: "fieldSelector",
      options: options
    };
  }
);
