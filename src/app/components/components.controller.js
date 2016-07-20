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

      function onDragStart(field) {
        console.log("Drag started >", field);
      }

      return {
        fields: getFields(),
        categories: getCategories(),
        dropZones: getDropZones,
        onFieldSelected: onFieldSelected,
        onDragStart: onDragStart
      }
    }

    return componentsController;
  }
);
