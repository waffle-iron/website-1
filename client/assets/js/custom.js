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
                        .top
                    )
                },
                2000
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
                        .top
                    )
                },
                2000
            );
        }
    );
};