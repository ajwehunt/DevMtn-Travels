angular.module('devmtnTravel')
.controller('locationsCtrl', function($scope, mainService) {

$scope.datas = mainService.travelInfo;

})
