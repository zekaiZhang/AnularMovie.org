/*创建MovieController控制器,调用封装好的movieHttp
 * */
var app = angular.module('app');
app.controller('MovieController', ['$scope', '$routeParams', 'baseUrl', 'movieHttp', function ($scope, $routeParams, baseUrl, movieHttp) {
    //页面还没加载完成使,显示加载gif
    $scope.isLoading = true;

    var url = baseUrl + $routeParams.type;

    var params = {
        start: 0,
        count: 5
    };

    movieHttp.jsonp(url, params, function (res) {
        $scope.res = res;
        //页面加载完成时,隐藏加载gif
        $scope.isLoading = false;
        $scope.$apply();
    })
}]);