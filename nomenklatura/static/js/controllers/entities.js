
var loadEntity = ['$route', '$http', '$q', function($route, $http, $q) {
  var dfd = $q.defer(),
      url = '/api/2/entities/' + $route.current.params.id;
  $http.get(url).then(function(res) {
    dfd.resolve(res.data);
  });
  return dfd.promise;
}];


var loadSchema = ['config', '$q', function(config, $q) {
  var dfd = $q.defer(),
      qualified = {};
  angular.forEach(config.SCHEMA.types, function(t) {
    angular.forEach(t.attributes, function(a) {
      qualified[a.qname] = a;
    });
  });
  config.SCHEMA.qualified = qualified;
  dfd.resolve(config.SCHEMA);
  return dfd.promise;
}];


nomenklatura.controller('EntitiesViewCtrl', ['$scope', '$routeParams', '$location',
            '$http', '$modal', '$timeout', 'schema', 'entity',
  function ($scope, $routeParams, $location, $http, $modal, $timeout, schema, entity) {

  $scope.entity = entity;
  $scope.schema = schema;

}]);
