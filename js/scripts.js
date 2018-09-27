jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------
    $('#preloader .status-mes').delay(600).fadeOut(function(){
      $('#preloader').delay(350).fadeOut('slow');
    });

    var validator = $('#registration-form').validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true,
          minlength: 10
        },
        message: "required"
      },
      messages: {
        name: "Por favor ingresa tu nombre",
        email: {
          required: "Por favor ingresa tu correo electrónico",
          email: "Por favor ingresa un correo electrónico válido",
        },
        phone: {
          required: "Por favor ingresa tu télefono",
          digits: "Por favor ingresa solo números",
          minlength: "Tu teléfono debe tener al menos 10 dígitos"
        },
        message: "Por favor ingresa un mensaje"
      },
      errorElement: "em",
      errorPlacement: function ( error, element ) {
        // Add the `help-block` class to the error element
        error.addClass( "help-block" );

        // Add `has-feedback` class to the parent div.form-group
        // in order to add icons to inputs
        element.parents( ".form-group" ).addClass( "has-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
          error.insertAfter( element.parent( "label" ) );
        } else {
          error.insertAfter( element );
        }

        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if ( !element.next( "span" )[ 0 ] ) {
          $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
        }
      },
      success: function ( label, element ) {
        // Add the span element, if doesn't exists, and apply the icon classes to it.
        if ( !$( element ).next( "span" )[ 0 ] ) {
          $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
        }
      },
      highlight: function ( element, errorClass, validClass ) {
        $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
        $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
      },
      unhighlight: function ( element, errorClass, validClass ) {
        $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
        $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
      },
      submitHandler: function(form) {
        var $form = $('#registration-form');
        var $message = $('#registration-msg');
        var $messageAlert = $('.alert', $message);
        var postForm = { //Fetch form data
          'nombre'     : $('#name', $form).val(),
          'correo'     : $('#email', $form).val(),
          'telefono'   : $('#phone', $form).val(),
          'mensaje'    : $('#message', $form).val(),
        };
        $.ajax({
          type      : 'POST',
          url       : 'https://usebasin.com/f/0d9133e8d7af.json',
          data      : postForm,
          dataType  : 'json',
          success   : function(data) {
            if (data.success) {
                $messageAlert.html("Hemos recibido tu mensaje");
                $messageAlert.removeClass("alert-danger");
                $messageAlert.addClass("alert-success");
                $message.show();
                $form.trigger("reset");
                $('.form-group span').remove();
                $('.form-group').removeClass('has-error has-success');
            }
            else
            {
                $messageAlert.html("Falló envío");
                $messageAlert.removeClass("alert-success");
                $messageAlert.addClass("alert-danger");
                $message.show();
            }
          },
          beforeSend : function(data) {
            $("button[type='submit']", $form).attr("disabled", true);
            $( "#ajaxloader" ).show();
          },
          complete   : function(data) {
            $("button[type='submit']", $form).attr("disabled", false);
            $( "#ajaxloader" ).hide();
            $message.delay(2000).fadeOut('slow');
          }
        });
      }
    });

}); // JQuery end
