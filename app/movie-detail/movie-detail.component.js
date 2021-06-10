'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$routeParams', 'Movie',
      function MovieDetailController($routeParams, Movie) {
        var self = this;
        var o_list = [{id:1,url:"img/phones/motorola-xoom-with-wi-fi.0.jpg"},{id:2,url:"img/phones/motorola-xoom.0.jpg"}];
        self.imgArray = o_list;
        self.movie = Movie.movieDetail().get({movieId: $routeParams.phoneId}, function(movie) {
          self.setImage(movie.data.imgUrl);
        });
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
