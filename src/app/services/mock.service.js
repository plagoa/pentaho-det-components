define(
  [],
  function() {
    'use strict';

    function mockService() {

      var fields = [
        {name: 'Field 1', state: false},
        {name: 'Field 2', state: false},
        {name: 'Field 3', state: false},
        {name: 'Field 4', state: false},
        {name: 'Field 5', state: false},
        {name: 'Field 11', state: false},
        {name: 'Field 12', state: false},
        {name: 'Field 13', state: false}
      ];

      function getFields() {
        return fields;
      }

      function fieldSelected(selectedField) {
        fields.forEach(function(field){
          if(field.name == selectedField.name) field.state = !selectedField.state;
        });
      }

      return {
        getFields: getFields,
        fieldSelected: fieldSelected
      }
    }

    return mockService;
  }
);
