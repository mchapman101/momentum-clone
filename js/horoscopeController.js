angular.module("app").controller("horoscopeController", function($scope, horoscopesService){

$scope.horoscopes;

  $scope.getHoroscope = function(){
    horoscopesService.getHoroscope().then(function(response){

    return $scope.horoscopes = response;
  })

}
$scope.getHoroscope();

$scope.makePrediction = function(obj){
  $scope.selectedHoroscope = obj;
}

$( document).on("click", "#pick-your-sign", function() {
  $( "#the-signs" ).slideToggle( "fast", "swing" );
});

$( "#sign-me-up" ).click(function() {
  $( "#fade-in-out" ).fadeIn( "slow" );
});

})
