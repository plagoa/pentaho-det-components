define(
  [
    'services/mock.service'
  ],
  function(MockService) {

    function componentsController(MockService) {

      function getFields() {
        return MockService.getFields();
      }

      function getCategories() {
        return MockService.getCategories();
      }

      function onFieldSelected(field) {
        MockService.fieldSelected(field);
      }

      return {
        fields: getFields(),
        categories: getCategories(),
        onFieldSelected: onFieldSelected
      }
    }

    return componentsController;
  }
);
