define(['directives/directives', 'services/version'], function (directives) {
    'use strict';
    directives.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
});