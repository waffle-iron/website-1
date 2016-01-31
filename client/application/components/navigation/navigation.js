/* global application*/

application
.controller('navigation', function ($scope, $timeout, $mdSidenav, $log, toggleRight) {
    $scope.toggleRight = toggleRight;
})