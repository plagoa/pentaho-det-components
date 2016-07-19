define(
  [
    'lodash'
  ],
  function(_) {
    'use strict';

    function mockService() {

      var fields = [
        {name: 'Field 1', state: false, category: 'Category 1'},
        {name: 'Field 2', state: false, category: 'Category 1'},
        {name: 'Field 3', state: false, category: 'Category 1'},
        {name: 'Field 4', state: false, category: 'Category 2'},
        {name: 'Field 5', state: false, category: 'Category 2'},
        {name: 'Field 6', state: false, category: 'Category 2'},
        {name: 'Field 7', state: false, category: 'Category 2'},
        {name: 'Field 8', state: false, category: 'Category 3'},
        {name: 'Field 9', state: false, category: 'Category 3'},
        {name: 'Field 10', state: false, category: 'Category 3'}
      ];

      function getFields() {
        return fields;
      }

      function getCategories() {
        return _.groupBy(fields, 'category');;
      }

      function fieldSelected(selectedField) {
        fields.forEach(function(field){
          if(field.name == selectedField.name) field.state = !selectedField.state;
        });
      }

      return {
        getFields: getFields,
        getCategories: getCategories,
        fieldSelected: fieldSelected
      }
    }

    return mockService;
  }
);
