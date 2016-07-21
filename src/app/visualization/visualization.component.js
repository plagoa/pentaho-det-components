define(
    [
        'text!./visualization.html'
    ],
    function(visualizationTemplate) {

        var options = {
            template: visualizationTemplate
        };

        return {
            name: "visualization",
            options: options
        };
    }
);