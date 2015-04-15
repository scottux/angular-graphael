/**
 * @ngdoc directive
 * @name piechart
 * @module angular-graphael
 * @description
 * Creates a pie chart.
 * @link http://g.raphaeljs.com/reference.html#Paper.piechart
 */
angular.module('angular-graphael').directive('piechart', function ($window, mapData) {
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
});
