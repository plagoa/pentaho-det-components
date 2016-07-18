define(
  [
    'text!./field-item.html',
    './field-item.controller'
  ],
  function(fieldItemTemplate, fieldItemController) {

    var options = {
      bindings: {
        // inputs
        field: '<',

        // outputs
        onSelect: '&'
      },
      template: fieldItemTemplate,
      controller: fieldItemController
    };

    return {
      name: "fieldItem",
      options: options
    };
  }
);
