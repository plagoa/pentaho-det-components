define(
  [
    'text!./field-selector.html',
    './field-selector.controller'
  ],
  function(fieldSelectorTemplate, fieldSelectorController) {

    var options = {
      bindings: {
        fields: '<',
        onSelected: '&'
      },
      template: fieldSelectorTemplate,
      controller: fieldSelectorController
    };

    return {
      name: "fieldSelector",
      options: options
    };
  }
);
