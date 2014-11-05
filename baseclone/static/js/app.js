var baseclone = angular.module('baseclone', ['ngRoute']);

baseclone.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/static/js/views/home.html',
            controller: homeController
        }).
        when('/projects/:id', {
            templateUrl: '/static/js/views/project.html',
            controller: projectController
        }).
        when('/projects/edit/:id', {
            templateUrl: '/static/js/views/editProject.html',
            controller: editController
        }).
        when('/projects/delete/:id', {
            templateUrl: '/static/js/views/delete.html',
            controller: deleteProjectController
        }).
        when('/event/edit/:projectId/:eventId', {
            templateUrl: '/static/js/views/editEvent.html',
            controller: editCalendarController
        }).
        when('/event/delete/:projectId/:eventId', {
            templateUrl: '/static/js/views/deleteEvent.html',
            controller: deleteCalendarController
        }).
        otherwise({redirectTo: '/'});
}]);