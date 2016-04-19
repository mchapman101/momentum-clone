angular.module("app").controller("horoscopeController", function($scope, horoscopesService){

$scope.horoscopes;

  $scope.getHoroscope = function(){
    horoscopesService.getHoroscope().then(function(response){
    
    return $scope.horoscopes = response;
  })

}
$scope.getHoroscope();


})
