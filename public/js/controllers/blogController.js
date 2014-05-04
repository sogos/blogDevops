define(['controllers/controllers', 'services/version'], function (controllers) {
    'use strict';
    controllers.controller('blogCtrl', ['$scope', '$rootScope', 'version', function ($rootScope, $scope, version) {
        $scope.name = "plop";
        $scope.title = "Test";
        $rootScope.name = "View1";
    }]);
});