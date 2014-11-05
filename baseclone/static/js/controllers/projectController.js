function projectController($scope, $http, $routeParams, ProjectFactory) {
    $scope.projects = ProjectFactory.projectList;

    var projectId = $routeParams.id;
    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            console.log(data);
            $scope.project = data;
        }).error(function(data) {
            console.log("didn't work");
        });
    $http.get('/proxy/projects/' + projectId + '/topics.json').
        success(function(topics){
            console.log(topics);
            $scope.topics = topics;
        }).error(function(topics) {
            console.log(topics);
        });
//    Get Calendar Event
    $http.get('/proxy/projects/' + projectId + '/calendar_events.json').
        success(function(events){
            console.log('calendar events');
            console.log(events);
            $scope.events = events;
        }).error(function(events) {
            console.log(events);
        });
//    create Calendar Event
    $scope.newEvent = function() {
        var data = {
            "summary": $scope.eventSummary,
            "description": $scope.eventDescription,
            "starts_at": $scope.starts

        };
        $http.post('/proxy/projects/' + projectId + '/calendar_events.json', data).
            success(function(event){
                console.log('calendar events');
                console.log(event);
                $scope.events.push(event);
            //clear event inputs
                $scope.eventSummary = '';
                $scope.eventDescription = '';
                $scope.starts = '';
            }).error(function(event) {
                console.log(event);
            });
    };

}