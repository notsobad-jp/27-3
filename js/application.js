$(function(){
  $(document).on('submit', '#form', function(e){
    e.preventDefault();
    $('#submit').addClass('loading');
    var data = $(this).serialize();

    //TODO: Validate data

    setTimeout(function(){
      $('#submit').removeClass('loading');
      $('#modal-success').modal('show');
    }, 1000);
    //submitForm(data);
  });


  function submitForm(data) {
    $.ajax({
        url: 'https://hooks.zapier.com/hooks/catch/708819/6dd91x/',
        method: 'POST',
        data: data,
        dataType: 'jsonp',
        contentType: 'application/json; charset=utf-8',
        error: function(res, text){
          $('#modal-error').modal('show');
          $('#submit').removeClass('loading');
          console.log('Err', res);
          console.log(text);
        },
        success: function(res){
          $('#modal-success').modal('show');
          $('#submit').removeClass('loading');
          console.log('Success', res);
        }
    });
  }
});
