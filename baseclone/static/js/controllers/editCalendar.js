//    edit Calendar Event
function editCalendarController($scope, $http, $routeParams) {
    var projectId = $routeParams.projectId;
    var eventId = $routeParams.eventId;
    console.log($routeParams);

    $http.get('/proxy/projects/' + projectId + '/calendar_events/'+ eventId +'.json').
        success(function(event){
            console.log('calendar events');
            console.log(event);
            $scope.event = event;
        }).error(function(event) {
            console.log(event);
        });

    $scope.editEvent = function() {
        var data = {
            "summary": $scope.eventSummary,
            "description": $scope.eventDescription,
            "starts_at": $scope.starts

        };
        $http.put('/proxy/projects/' + projectId + '/calendar_events/'+ eventId +'.json', data).
        success(function (editedEvent) {
            console.log('event edited');
            console.log(editedEvent);
            //clear event inputs
            $scope.eventSummary = '';
            $scope.eventDescription = '';
            $scope.starts = '';
        }).error(function (event) {
            console.log(event);
        });
    };

}
