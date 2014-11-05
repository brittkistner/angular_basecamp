function deleteCalendarController($scope, $http, $routeParams) {
    console.log('made it to routeParams');
    var projectId = $routeParams.projectId;
    var eventId = $routeParams.eventId;
    console.log($routeParams);
//    delete Calendar Event
    $http.delete('/proxy/projects/' + projectId + '/calendar_events/'+ eventId +'.json').
        success(function(event){
            console.log('event deleted');
        }).error(function(event) {
            console.log(event);
        });
}