require.config({
    paths: {
        angular: '../vendor/angular/angular',
        angularRoute: '../vendor/angular-route/angular-route.min',
        angularResource: '../vendor/angular-resource/angular-resource.min',
        angularMocks: '../vendor/angular-mocks/angular-mocks',
        jquery: '../vendor/jquery/dist/jquery.min',
        domReady: '../vendor/requirejs-domready/domReady',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularResource': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        bootstrap: ['jquery']
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'angularRoute',
    'angularResource',
    'app',
    'domReady',
    'services/services',
    'services/version',
    'services/factory/Article',
    'services/factory/ArticleLoader',
    'controllers/controllers',
    'controllers/blogController',
    'controllers/articleController',
    'filters/filters',
    'filters/interpolate',
    'directives/directives',
    'directives/appVersion',
    'routes/routes'
], function (angular, angularRoute, angularResource, app, domReady) {
    'use strict';
    domReady(function () {
        angular.bootstrap(document, ['myApp']);
    });
});
