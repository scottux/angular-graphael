angular.module('angular-graphael').constant('mapData', function (target){
    'use strict';

    return Object.keys(target).map(function (key) {
        return target[key];
    });
});
