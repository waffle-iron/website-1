/* global application */

application.factory('toggleRight', function ( $mdSidenav ) {
    return ( function( navID ){
        return function() {
            $mdSidenav( navID )
            .toggle()
            .then(function () {
                //after toggle  
            });
        };
    })('right');
});