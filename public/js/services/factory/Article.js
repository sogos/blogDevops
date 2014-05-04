define(['services/services'], function (services) {
    'use strict';
    services.factory('Article', ['$resource',
         function ($resource) {
            return $resource('/api/article/:id', {id: '@id'});
        }]);
});