$(function() {
    $('#form').submit(function(e){
         e.preventDefault();
     var form=$('#form').serialize();

     $.ajax({
         url: "php/sendEmailForm.php",
         type: "POST",
         data: form,
         success: function (data) {
            $('.result').html(data).fadeIn('slow'); 
            $("#form").trigger('reset');
             setInterval(function(data){
                $('.result').html(data).fadeOut('slow'); 
             },3000);
         }
     });
    });
});