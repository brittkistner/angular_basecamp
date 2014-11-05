function editController($scope, $http, $routeParams) {
    var projectId = $routeParams.id;
    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            console.log(data);
            $scope.project = data;
        }).error(function(data) {
            console.log("didn't work");
        });


    $scope.editProject = function () {
        var data = {
            "name": $scope.projectName,
            "description": $scope.projectDescription
         };
        $http.put('/proxy/projects/' + projectId + '.json', data).
        success(function (editProject) {
            console.log('project edited');
            console.log(editProject);
            $scope.projectName = '';
            $scope.projectDescription = '';
        }).error(function (error) {
            console.log(error);
        });
    };
//redirect to home page
}
