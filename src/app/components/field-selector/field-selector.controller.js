define(
  [
    'services/mock.service'
  ],
  function(mockService) {

    fieldSelectorController.inject = ['mockService'];
    function fieldSelectorController(mockService) {

      this.fields = mockService.getFields();

      this.onSelected = function(field) {
        mockService.updateFieldState(field);
      }
    }

    return fieldSelectorController;
  }
);
