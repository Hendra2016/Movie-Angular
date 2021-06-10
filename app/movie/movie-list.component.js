'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie/movie-list.template.html',
    controller: ['Movie',
      function MovieListController(Movie) {
        this.movie = Movie.listMovie().query({name:''});
        this.orderProp = 'age';
      }
    ]
  });
