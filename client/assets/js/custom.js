window
.onload = function(){
    $('#web-design-link')
    .click(
        function(){
            $('body')
            .animate(
                {
                    scrollTop: (
                        $("#carousel")
                        .offset()
                        .top-55
                    )
                },
                500
            );
            
        }
    );
    
    $('#hosting-link')
    .click(
        function(){
            $('html, body')
            .animate(
                {
                    scrollTop: (
                        $("#carousel")
                        .offset()
                        .top-55
                    )
                },
                500
            );
            
        }
    );
    
    $('#carousel')
    .bind(
        'slide.bs.carousel',
        function( e ){
            
            var index = (
                $(e.relatedTarget)
                .index()
            ); 
            
            if( index == 0 ){
                
                $('#web-design-details')
                .removeClass(
                    'hidden'
                );
                
                $('#hosting-details')
                .addClass(
                    'hidden'
                );
            }
            
            if( index == 1 ){
                
                $('#web-design-details')
                .addClass(
                    'hidden'
                );
                
                $('#hosting-details')
                .removeClass(
                    'hidden'
                );
            }
        }
    );
};