define(['angular', 'app'], function (angular, app) {
    'use strict';
    return app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/partial1',
                controller: 'blogCtrl'
            });
            $routeProvider.when('/article/:articleSlug', {
                templateUrl: 'partials/article',
                controller: 'articleCtrl'
            });
            $routeProvider.when('/view1', {
                templateUrl: 'partials/partial1',
                controller: 'blogCtrl'
            });
        }
        ]);
});