

// Declare app level module which depends on filters, and services


define(['angular', 'angularRoute', 'controllers/controllers', 'services/services', 'directives/directives', 'filters/filters'],
    function (angular) {
        'use strict';
        return angular.module('myApp', ['ngRoute', 'controllers', 'services', 'filters', 'directives']);
});

/*
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
*/
