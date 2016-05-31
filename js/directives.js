angular.module('app')

.controller('timeController', ['$scope', function($scope) {
  $scope.format = 'h:mm:ss a';
  $scope.dateFormat = 'mm:dd:yy;';
}])



.directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });
    //
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
    link: link
  };
}])

.directive('navbar', function(){
  return {
    restrict:'EA',
    templateUrl: "views/navbar.html"
  };
  })

.directive('footBar', function(){
  return {
    restrict:'EA',
    templateUrl: 'views/footBar.html'
  };
});
