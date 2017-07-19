var app = angular.module('app');
/*设置接口路径
 * */
app.value('baseUrl', 'https://api.douban.com/v2/movie/');


app.service('movieHttp', ['$window', function ($window) {
    this.jsonp = function (url, params, callback) {

        //生成方法名称
        var callbackName = 'callback' + Math.random().toString().slice(2);

        //声明一个方法
        $window[callbackName] = function (res) {

            callback(res);

            //执行完成后删除新添加的script标签
            $window.document.body.removeChild(newScript);
        };

        //添加一个新的script标签
        var newScript = $window.document.createElement('script');

        //完整的数据路径
        var queryString = '';
        for (key in params) {
            queryString += key + '=' + params[key] + '&'
        }
        queryString += 'callback=' + callbackName;
        url += '?' + queryString;

        newScript.src = url;
        //跨域获取数据时,添加新的script标签并且拼接上相对应数据路径
        $window.document.body.appendChild(newScript);
    }

}])