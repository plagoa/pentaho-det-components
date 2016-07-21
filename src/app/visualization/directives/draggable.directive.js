define(
  [],
  function() {

    function draggable() {

      return {
        scope: {
          dragStart: '&', // parent
          dragStop: '&' // parent
        },
        link: function(scope, element) {

          var el = element[0];

          el.draggable = true;

          el.addEventListener(
            'dragstart',
            function(e) {
              scope.$apply('dragStart()');
              return false;
            },
            false
          );

          el.addEventListener(
            'dragend',
            function(e) {
              scope.$apply('dragStop()');
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
