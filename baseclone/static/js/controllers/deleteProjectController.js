function deleteProjectController($scope, $http, $routeParams) {
    var projectId = $routeParams.id;
    console.log("route params");
    console.log($routeParams);
    $http.delete('/proxy/projects/' + projectId + '.json').
        success(function (data) {
            console.log('project deleted');
        }).error(function (error) {
            console.log(error);
        });
}
