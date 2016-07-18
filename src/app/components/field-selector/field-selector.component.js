define(
  [
    'text!./field-selector.html',
    './field-selector.controller'
  ],
  function(fieldSelectorTemplate, fieldSelectorController) {

    var options = {
      bindings: {
        fields: '<'
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
