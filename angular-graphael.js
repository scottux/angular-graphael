/**
 * @ngdoc module
 * @name angular-graphael
 * A set of AngularJS directives to make charts using gRaphaël.
 * @link http://g.raphaeljs.com/
 */
angular.module('angular-graphael', []);

/**
 * @ngdoc directive
 * @name dotchart
 * @module angular-graphael
 * @description
 * Creates a scatter plot chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.dotchart
 */
angular.module('angular-graphael').directive('dotchart', ["$window", function ($window) {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            valuesx: '=',
            valuesy: '=',
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
                    x = scope.x || 0,
                    y = scope.y || 0,
                    width = scope.width || 500,
                    height = scope.height || 80,
                    // This maps the data for the chart.
                    getData = function () {
                        return Object.keys(scope.size).map(function (key) {
                            return scope.size[key];
                        });
                    };

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.dotchart(x, y, width, height, scope.valuesx, scope.valuesy, getData(), scope.options);
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
angular.module('angular-graphael').directive('piechart', ["$window", function ($window) {
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
                    rad = scope.radius || 100,
                    // Maps the data for the chart.
                    getValues = function (){
                        return Object.keys(scope.values).map(function (key) {
                                return scope.values[key];
                            });
                    };

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.piechart(cx, cy, rad, getValues(), scope.options);
            });
        }
    };
}]);
