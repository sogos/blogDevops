define(['filters/filters'], function (filters) {
    'use strict';
    filters.filter('interpolate', ['version', function (version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
});