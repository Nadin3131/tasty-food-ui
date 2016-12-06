/**
 * Created by nadin on 12/6/16.
 */
angular.module('tastyfood')
    .controller('recipesController',['$scope', '$log', function($scope, $log){
        $log.debug('recipes controller');

        $scope.test = 'test';
        $scope.recipes = [
            {"title" : "title 1", "content" : "content 1", "image" : "images/picture2.jpg"},
            {"title" : "title 2", "content" : "content 2","image" : "images/picture4.jpg"},
            {"title" : "title 3", "content" : "content 3","image" : "images/picture5.jpg"}
            ]

    }]);
