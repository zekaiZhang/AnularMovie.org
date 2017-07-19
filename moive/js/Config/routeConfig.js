var app = angular.module('app');
/*进行路由配置
 * 监听锚点变化,显示不同的模板*/
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/movie/:type', {
        templateUrl: 'list_tpl.html',
        controller: 'MovieController'
    }).otherwise({
        redirectTo: '/movie/in_theaters'
        //默认锚点为正在上映
    })
}]);