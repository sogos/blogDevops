define(['controllers/controllers', 'services/version', 'services/factory/Article'], function (controllers) {
    'use strict';
    controllers.controller('articleCtrl', ['$scope', '$rootScope', 'version', 'Article', '$location', function ($rootScope, $scope, version, Article, $location) {
        var articleb = $scope.article = {};
        articleb.titre = "Article 1";
        articleb.soustitre = "Ceci est un sous titre";
        articleb.contenu = " Ceci est du texte de remplissage";
        console.log(Article.get());
        console.log($location);
    }]);

});