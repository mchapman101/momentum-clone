angular.module("app").controller("mainCtrl", function($scope){
  $scope.nav = [
    {name: 'home', title: 'Home'},
    {name: 'calender', title: 'Calender'},
    {name: 'horoscopes', title: 'Horoscope'},
  ]
var bgImagesList = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg','08.jpg','09.jpg','10.jpg', '11.jpg', '12.jpg', '13.jpg', "14.jpg", "15.jpg", '16.jpg', '17.jpg', "18.jpg", '19.jpg', '20.jpg', '21.jpg', "22.jpg", "23.jpg", '24.jpg', '25.jpg'];

  var bgimg = bgImagesList[Math.floor(Math.random() * bgImagesList.length)];

$scope.setBackground = function(){
    return {
            'background-image':'url(img/backgrounds/' + bgimg + ')',
            'background-size':'100% 100%',
            'background-repeat':'no-repeat'
        }
}


  //end
})
