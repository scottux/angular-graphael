/**
 * @ngdoc module
 * @name angular-graphael
 * A set of AngularJS directives to make charts using gRaphaël.
 * @link http://g.raphaeljs.com/
 */
angular.module('angular-graphael', []);

angular.module('angular-graphael').constant('mapData', function (target){
    'use strict';

    return Object.keys(target).map(function (key) {
        return target[key];
    });
});

/**
 * @ngdoc directive
 * @name barchart
 * @module angular-graphael
 * @description
 * Creates a bar chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.barchart
 */
angular.module('angular-graphael').directive('barchart', ["$window", "mapData", function ($window, mapData) {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            width: '=',
            height: '=',
            x: '=',
            y: '=',
            options: '=',
            values: '='
        },
        template: '<div></div>',
        link: function (scope, element) {
            // Right now we only care about watching if the data changes.
            scope.$watch('values', function () {
                var r,
                    // X coordinate
                    x = scope.x || 100,
                    // Y coordinate
                    y = scope.y || 100,
                    // Width
                    width = scope.width || 100,
                    // Height
                    height = scope.height || 100;

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.barchart(x, y, width, height, mapData(scope.values), scope.options);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name dotchart
 * @module angular-graphael
 * @description
 * Creates a scatter plot chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.dotchart
 */
angular.module('angular-graphael').directive('dotchart', ["$window", "mapData", function ($window, mapData) {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            valuesX: '=',
            valuesY: '=',
            size: '=',
            options: '=',
            x: '=',
            y: '='
        },
        template: '<div></div>',
        link: function (scope, element) {
            // Right now we only care about watching if the data changes.
            scope.$watch('size', function () {
                var r,
                // X coordinate
                    x = scope.x || 0,
                // Y coordinate
                    y = scope.y || 0,
                // Width
                    width = scope.width || 500,
                // Height
                    height = scope.height || 80;

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.dotchart(x, y, width, height, scope.valuesX, scope.valuesY, mapData(scope.size), scope.options);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name linechart
 * @module angular-graphael
 * @description
 * Creates a line chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.linechart
 */
angular.module('angular-graphael').directive('linechart', ["$window", "mapData", function ($window, mapData) {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            width: '=',
            height: '=',
            x: '=',
            y: '=',
            options: '=',
            valuesX: '=',
            valuesY: '='
        },
        template: '<div></div>',
        link: function (scope, element) {
            // Right now we only care about watching if the data changes.
            scope.$watch('values', function () {
                var r,
                // X coordinate
                    x = scope.x || 100,
                // Y coordinate
                    y = scope.y || 100,
                // Width
                    width = scope.width || 100,
                // Height
                    height = scope.height || 100;

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.linechart(x, y, width, height, mapData(scope.valuesX), mapData(scope.valuesY), scope.options);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name piechart
 * @module angular-graphael
 * @description
 * Creates a pie chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.piechart
 */
angular.module('angular-graphael').directive('piechart', ["$window", "mapData", function ($window, mapData) {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            values: '=',
            radius: '=',
            cx: '=',
            cy: '=',
            options: '='
        },
        template: '<div></div>',
        link: function (scope, element) {
            // Right now we only care about watching if the data changes.
            scope.$watch('values', function () {
                var r,
                    // Center X
                    cx = scope.cx || 100,
                    // Center Y
                    cy = scope.cy || 100,
                    // Radius
                    rad = scope.radius || 100;

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.piechart(cx, cy, rad, mapData(scope.values), scope.options);
            });
        }
    };
}]);
