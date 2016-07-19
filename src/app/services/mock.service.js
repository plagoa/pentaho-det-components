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


      var drop_zones = [
        {name: 'dropZone1', id: 'dp1', label: 'Drop Zone 1', maxFields: 1, emptyLabel: 'Drop Field Here', disabled: 'false', required: 'true', acceptFields: {}, currentFields: {}},
        {name: 'dropZone2', id: 'dp2', label: 'Drop Zone 2', maxFields: 5, emptyLabel: 'Drop Numeric Field Here', disabled: 'true', required: 'false', acceptFields: {}},
        {name: 'dropZone3', id: 'dp3', label: 'Drop Zone 3', maxFields: 4, emptyLabel: 'Drop Any Field Here', required: 'true', acceptFields: {}},
        {name: 'dropZone4', id: 'dp4', label: 'Drop Zone 4', maxFields: 3, emptyLabel: 'Drop Any Field Here', disabled: 'true', required: 'false', acceptFields: {}}
      ];

      function getDropZones() {
        return drop_zones;
      }


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
        getDropZones: getDropZones,
        fieldSelected: fieldSelected
      }
    }

    return mockService;
  }
);
