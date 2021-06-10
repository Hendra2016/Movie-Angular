/*'use strict';

angular.
  module('core.movie').
  factory('Movie', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
*/

'use strict';

angular.
  module('core.movie').
  factory('Movie', ['$resource',
    function($resource, data) {
      return  {
        listMovie: function(t){
          return $resource('http://localhost:9000/nostra/movie/search', {}, {
              query: {
              method: 'GET',
              params: {name: '@searchParam'},
              isArray: true,
              transformResponse: function (response) {
                console.log(data);
                return JSON.parse(angular.toJson(JSON.parse(response).data));
              }
            }
          });
        },
        movieDetail: function(t){
          return $resource('http://localhost:9000/nostra/movie/:movieId', {movieId :'@movieId'}, {
              query: {
              method: 'GET',
              transformResponse: function (response) {
                console.log(JSON.parse(angular.toJson(JSON.parse(response).data)));
                return JSON.parse(angular.toJson(JSON.parse(response).data));
              }
            }
          });
        }
      }
    }
    ]);
