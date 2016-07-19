define(
  [
    'services/mock.service'
  ],
  function(MockService) {

    function componentsController(MockService) {

      function fields() {
        return MockService.getFields();
      }

      function dropZones() {
        return MockService.getDropZones();
      }

      function onSelect(field) {
        MockService.fieldSelected(field);
      }

      return {
        onSelect: onSelect,
        fields: fields,
        dropZones: dropZones
      }
    }

    return componentsController;
  }
);
