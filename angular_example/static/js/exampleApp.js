var exampleApp = angular.module('exampleApp',['ngRoute']);

exampleApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/example_view.html', controller: exampleController}).
//        when('/index', {templateUrl: '/static/js/views/index.html', controller: indexController}). <-- how to add another route
//        when('/dynamic', {templateUrl: 'static/js/views/dynamic_view.html', controller: dynamicController}).
        when('/dynamic', {templateUrl: '/static/js/views/dynamic_example.html', controller: dynamicController})
        otherwise({redirectTo: '/'});
}]);

//must have a server running in order to use ngRoute