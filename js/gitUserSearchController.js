githubUserSearch.controller('GitUserSearchController', ['$resource','Search',function($resource, Search) {

  // var searchResource = $resource('https://api.github.com/search/users?access_token=' + access_token);
  // var self = this;
  //
  // self.doSearch = function() {
  //   self.searchResult = searchResource.get(
  //     { q: self.searchTerm }
  //   );
  // };

  var self = this;

  // var searchFact = $factory('Search');

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };


}]);
