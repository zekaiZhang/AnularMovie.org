/*设置白名单,允许访问的网址
* */
var app=angular.module('app');
app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        //允许访问豆瓣api下的文件
        'https://api.douban.com/**'
    ])
}]);