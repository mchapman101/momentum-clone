angular.module("app").service("quoteService", function($http){


  this.getQuote = function() {
    var getUrl = 'http://api.icndb.com/jokes/random';

    return $http.get(getUrl).then(function(response){
      console.log(response.data);
      return response.data;
    })
  }



})

 // &quot;
