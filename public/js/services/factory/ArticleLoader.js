define(['services/services', 'services/factory/Article'], function (services) {
    'use strict';
    services.factory('ArticleLoader', ['Article', '$route', '$q',
        function (Article, $route, $q) {
            var delay = $q.defer();
            Article.get({id: $route.current.params.articleId}, function (article) {
                delay.resolve(article);
            },
                 function () {
                    delay.reject('Unable to fetch article ' + $route.current.params.articleId);
                });
            return delay.promise;
        }]);
});