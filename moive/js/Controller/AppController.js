/*整个应用的总控制器*/
var app = angular.module('app');

app.controller('zzkController', ['$scope', function ($scope) {
    $scope.title = '电影资讯';

}]);