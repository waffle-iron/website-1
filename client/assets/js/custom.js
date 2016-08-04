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
  
    
    var form = $('#contact-form');
    
    $( form )
    .validate(
        {
            rules: {
                name: {
                    minlength: 
                        3,
                    required: 
                        true
                },
                company:{
                    required:
                        false
                },
                email: {
                    required: 
                        true,
                    email: 
                        true
                },
                message: {
                    required:
                        true
                }
            },
            highlight: function ( element ) {
                
                $(element)
                .closest('.form-group')
                .addClass('has-error');
                
            },
            success: function (element) {
                
                $(element)
                .closest('.form-group')
                .removeClass('has-error');
            
            }
        }
    );
    
    $(form)
    .submit(
        function( event ){
            event
            .preventDefault();
            
            if( !$(form).valid() ) {
                return;
            }
            
            $.ajax(
                {
                    type: 
                        'POST',
                    url:(
                        $(form)
                        .attr('action')
                    ),
                    data:(
                        $(form)
                        .serialize()
                    ) 
                }
            )
            .done(
                function( response ){
                    
                    $("#contact-form")[0]
                    .reset();
                    
                    $(form)
                    .validate()
                    .resetForm();
                    
                    $('button.toggle-contact')
                    .trigger('click');
                    
                    $('#alerts')
                    .append(
                        '<div class="alert alert-success alert-dismissible">' 
                        + '<button type="button" class="close" data-dismiss="alert">' 
                        + '&times;</button>' 
                        + 'We\'ve received your message and will get back to you shortly!' 
                        + '</div>'
                    );
                }
            )
            .fail(
                function( response ){
                    
                    $('#alerts')
                    .append(
                        '<div class="alert alert-danger alert-dismissible">' 
                        + '<button type="button" class="close" data-dismiss="alert">' 
                        + '&times;</button>' 
                        + 'Hmmm, looks like something went wrong - Please try again later' 
                        + '</div>'
                    );
                }
            );
        }
    );
    
};