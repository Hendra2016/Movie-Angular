'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/movie', {
          template: '<movie-list></movie-list>'
        }).
        when('/movie/:phoneId', {
          template: '<movie-detail></movie-detail>'
        }).
        otherwise('/movie');
    }
  ]);
