/* global expect inject*/


describe('toggleRight', function() {
    var scope, 
        navigationController;

    beforeEach( 
        inject( 
            function( $rootScope, $controller ){
                scope = $rootScope.$new();

                navigationController = function() {
                    return $controller('navigation', {
                        '$scope': scope
                    });
                };
            }
        )
    );

    it('should return the value of the toggled sideNav', function() {
        var controller = navigationController();
        console.log(controller);
    });
});
