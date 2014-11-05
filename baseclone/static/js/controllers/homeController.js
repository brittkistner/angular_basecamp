function homeController($scope, $http, ProjectFactory) {
    console.log('home controller');
    $http.get('/proxy/projects.json').
        success(function(projectsResponse) {
            console.log(projectsResponse);
            $scope.projects = projectsResponse;
            ProjectFactory.projectList = $scope.projects;
            console.log('project factory');
            console.log(ProjectFactory.projectList);
        }).error(function(error) {
            console.log(error);
        });

    $scope.newProject = function() {
        var data = {
            "name": $scope.projectName,
            "description": $scope.projectDescription
        };
        $http.post('/proxy/projects.json', data).
            success(function(newProject) {
                $scope.projects.push(newProject); //this is correct, not the slides
                $scope.projectName = '';
                $scope.projectDescription = '';
            }).error(function(error) {
                console.log(error);
            });

    };


}