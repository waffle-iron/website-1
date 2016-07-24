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
                        .top+20
                    )
                },
                500
            );
        }
    );
    
    $('#hosting-link')
    .click(
        function(){
            $('body')
            .animate(
                {
                    scrollTop: (
                        $("#carousel")
                        .offset()
                        .top+20
                    )
                },
                500
            );
        }
    );
};