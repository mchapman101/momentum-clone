angular.module("app", ['ui.router', 'ngAnimate'])

.config(['$stateProvider','$urlRouterProvider',
  function(stateProvider, urlRouterProvider){

    urlRouterProvider.otherwise('/home');
    stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
     .state('horoscopes', {
       url:'/horoscopes',
       templateUrl: "views/horoscopes.html"
     })
     .state('calender', {
       url:'/calender',
       templateUrl: "views/calender.html"
     });

  }])
