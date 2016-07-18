define(
  [
    'text!./field-selector.html'
  ],
  function(fieldSelectorTemplate) {

    var options = {
      bindings: {
        fields: '<',
        onSelect: '&'
      },
      template: fieldSelectorTemplate
    };

    return {
      name: "fieldSelector",
      options: options
    };
  }
);
