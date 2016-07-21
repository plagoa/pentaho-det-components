define(
  [],
  function() {

    function droppable() {

      return {
        scope: {
          drop: '&',
        },
        link: function(scope, element) {

          var el = element[0];

          el.droppable = true;

          el.addEventListener(
            'drop',
            function(e) {
              event.preventDefault();
              scope.$apply('drop()');
              return false;
            },
            false
          );

          el.addEventListener(
            'dragenter',
            function(e) {
              event.preventDefault();
            },
            false
          );

          el.addEventListener(
            'dragover',
            function(e) {
              event.preventDefault();
            },
            false
          );
        }
      }
    }

    return {
      name: "droppable",
      options: droppable
    };
  }
);
