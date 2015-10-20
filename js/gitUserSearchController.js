githubUserSearch.controller('GitUserSearchController', ['$resource','Search',function($resource, Search) {
  var self = this;
  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };
}]);
