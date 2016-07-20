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

      function getDropZones() {
        return MockService.getDropZones();
      }

      function onFieldSelected(field) {
        MockService.fieldSelected(field);
      }

      function onRemove(dropZoneId, fieldId) {
        MockService.dropZoneFieldRemove(dropZoneId, fieldId);
      }

      return {
        fields: getFields(),
        categories: getCategories(),
        dropZones: getDropZones,
        onFieldSelected: onFieldSelected,
        onRemove: onRemove
      }
    }

    return componentsController;
  }
);
