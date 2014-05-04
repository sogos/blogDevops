module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'public/vendor/angular/angular.js',
            'public/vendor/angular-route/angular-route.js',
            'public/vendor/angular-mocks/angular-mocks.js',
            'public/js/app.js',
            'public/js/controllers.js',
            'public/js/directives.js',
            'public/js/filters.js',
            'public/js/services.js',
            'test/unit/*Spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};