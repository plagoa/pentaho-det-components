define(
  [
    'lodash',
    'services/mock.service'
  ],
  function(_, MockService) {

    function componentsController(MockService) {

      function getFields() {
        return MockService.getFields();
      }

      function getCategories() {
        var fields = MockService.getFields();
        return _.groupBy(fields, 'category');
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
