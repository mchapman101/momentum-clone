angular.module("app").service("horoscopesService", function($http){


  this.getHoroscope = function() {
    var daScopes = ["Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Ares", "Taurus", "Gemini", "Cancer", "Leo", "Virgo"];
    console.log(daScopes);
    return daScopes;
    // var getUrl = 'http://horoscope-api.herokuapp.com/horoscope/';
    // // console.log("hit1")
    // return $http({
    //   method: 'GET',
    //   url: getUrl + "week" + "/libra"
    // })
    //
    // .then(function(response){
    //   console.log("hit2", response);
    //   return response.data;
    })
  }

})
