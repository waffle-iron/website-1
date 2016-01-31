/* global application*/

application
.controller('contactUs', function ($scope, $timeout, $mdSidenav, $log, toggleRight) {
    $scope.toggleRight = toggleRight;
})