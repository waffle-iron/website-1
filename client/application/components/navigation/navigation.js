/* global application*/

application
.controller('navigation', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleRight = (function(navID){
        return function() {
            $mdSidenav(navID)
            .toggle()
            .then(function () {
            //after toggle  
        });
    };
})('right');
})