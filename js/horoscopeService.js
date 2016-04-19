angular.module("app").service("horoscopesService", function($http){


  this.getHoroscope = function() {
    var getUrl = 'http://a.knrz.co/horoscope-api/current';
    console.log("hit1")
    return $http({
      method: 'GET',
      url: getUrl,
    })

    // .success(function(data) {
    //  console.log('success', data);
    // })
    // .error(function(data, status) {
    //  console.error('Repos error', status, data);
    // })
    // .then(function(data){
    //   // console.log('and then', data);
    // })
    // .finally(function(data) {
    // //  console.log("finally finished repos", data);
    // })
    //
    .then(function(response){
      // console.log("hit2", response);
      return response.data;
    })
  }

})
