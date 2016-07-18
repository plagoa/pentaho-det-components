define(
  [
    'services/mock.service'
  ],
  function(MockService) {

    function componentsController(MockService) {

      function fields() {
        return MockService.getFields();
      }

      function onSelect(field) {
        MockService.fieldSelected(field);
      }

      return {
        onSelect: onSelect,
        fields: fields
      }
    }

    return componentsController;
  }
);
