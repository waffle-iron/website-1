window
.onload = function(){
    $('.web-design-link')
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
    
  $('.toggle-contact')
  .click(
      function () {
        $('#contact')
        .toggleClass('toggle-hidden')
    }
  );
};