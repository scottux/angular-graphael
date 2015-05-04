/**
 * @ngdoc directive
 * @name barchart
 * @module angular-graphael
 * @description
 * Creates a bar chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.barchart
 */
angular.module('angular-graphael').directive('barchart', function ($window, mapData) {
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
});
