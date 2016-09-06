angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, mainService) {

$scope.datas = mainService.travelInfo;

})
