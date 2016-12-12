/**
 * Created by nadin on 12/6/16.
 */
angular.module('tastyfood')
    .controller('recipesController', ['$scope', '$log', '$http', function ($scope, $log, $http) {
      $log.debug('recipes controller');


      $http.get('/api/recipe').then(function (response) {
        $scope.recipes = response.data;
        $log.info('success ' + response.status)
      }, function (response) {
        $log.error('error ' + response.status + ', ' + response.statusText)
      });

    }]);
