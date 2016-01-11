'use strict';

// Declare app level module which depends on views, and components
angular.module('youtubeToMp3Converter', [
  'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
