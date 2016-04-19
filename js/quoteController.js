angular.module("app").controller("quoteController", function($scope, quoteService){

$scope.quote;

  $scope.getQuote = function(){   quoteService.getQuote().then(function(response){
    response.value.joke = quoteCleaner(response.value.joke)
    return $scope.quote = response;
  })

}
$scope.getQuote();


var quoteCleaner = function(response){
  var newStr = response.replace(/&quot;/g, '\"');
  return newStr;
}

})
