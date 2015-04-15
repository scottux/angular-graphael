/**
 * @ngdoc directive
 * @name dotchart
 * @module angular-graphael
 * @description
 * Creates a scatter plot chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.dotchart
 */
angular.module('angular-graphael').directive('dotchart', function ($window, mapData) {
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
                    height = scope.height || 80;

                // If you don't remove the old chart, you're gonna have a bad time.
                element[0].innerHTML = '';
                // Set up the canvas
                r = $window.Raphael(element[0]);
                // Add the chart to the canvas with all of our options and data.
                r.dotchart(x, y, width, height, scope.valuesx, scope.valuesy, mapData(scope.size), scope.options);
            });
        }
    };
});
