function dynamicController($scope, $http) {
    $scope.chuckNorrisMe = function(){
        $scope.firstName = 'Chuck';
        $scope.lastName = 'Norris';
        $http({method: 'GET',
            url: 'http://api.icndb.com/jokes/random?firstName=' + $scope.firstName + '&lastName=' + $scope.lastName}).
            success(function(data, status, headers, config) {
                   $scope.chuckNorrisJoke = data.value.joke;
            });
        };
        $scope.chuckNorrisMe();
}
//finish