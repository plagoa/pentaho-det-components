define(
  [],
  function() {

    function draggable() {

      return {
        scope: {
          drag: '&' // parent
        },
        link: function(scope, element) {

          var el = element[0];

          el.draggable = true;

          el.addEventListener(
            'dragstart',
            function(e) {
              scope.$apply('drag()');
              return false;
            },
            false
          );
        }
      }
    }

    return {
      name: "draggable",
      options: draggable
    };
  }
);
