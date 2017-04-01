$(function(){
  var form_submitted = map_downloaded = access_downloaded = keybox_downloaded = false;
  var reserve_id = '';

  /************************************************
  * Require Login
  ************************************************/
  $(document).on('click', '#login-submit', function(e){
    e.preventDefault();
    var valid = true;
    var res_id = $('input[name="reservation_id"]').val();
    if(!res_id) {
      $('input[name="reservation_id"]').parent('.field').addClass('error');
      //valid = false;
    }else {
      $('input[name="reservation_id"]').parent('.field').removeClass('error');
    }

    var password = $('input[name="password"]').val();
    if(password != 'yumitomo27-3!') {
      $('input[name="password"]').parent('.field').addClass('error');
      //valid = false;
    }else {
      $('input[name="password"]').parent('.field').removeClass('error');
    }

    if(valid) {
      reserve_id = res_id;
      $("#login-segment").hide();
      $("#main-segment").show();
    }
  });


  /************************************************
  * Data Download
  ************************************************/
  var images = {
    'map': 'howtogo.jpg',
    'access': 'access.pdf',
    'keybox': 'howtoopen.jpg'
  }
  $(document).on('click', '.download-btn', function(e){
    e.preventDefault();
    var item = $(this).attr('data-item');
    var downloaded = eval(item + "_downloaded");
    if(!downloaded) {
      submitDownloadLog({'id': reserve_id, 'type': images[item]});
      eval(item+"_downloaded=true");
    }
    var url = '../../img/' + images[item];
    window.open(url, '_blank');
  });

  function submitDownloadLog(data) {
    $.ajax({
      url: 'https://hooks.zapier.com/hooks/catch/708819/6dm7i2/',
      method: 'POST',
      data: data,
      dataType: 'jsonp',
      contentType: 'application/json; charset=utf-8',
      error: function(res, text){
        console.log('Err', res);
        console.log(text);
      },
      success: function(res){
        console.log('Success', res);
      }
    });
  }


  /************************************************
  * Form Submit
  ************************************************/
  $(document).on('submit', '#form', function(e){
    e.preventDefault();
    if(form_submitted) {
      alert("The form has been submitted already. If you need to fix the information, please reload the page and try again.");
      return;
    }

    $('#submit').addClass('loading');
    var data = $(this).serialize();
    data += '&RESERVATION_ID='+reserve_id;

    // Validate data
    var valid = true;
    $(".required").each(function(index){
      if($(this).val()==''){
        valid = false;
        $(this).parent('.field').addClass('error');
      }else {
        $(this).parent('.field').removeClass('error');
      }
    });

    if(valid) {
      submitForm(data);
    }else {
      $('#submit').removeClass('loading');
      $('#modal-error').modal('show');
    }
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
        form_submitted = true;
        $('#modal-success').modal('show');
        $('#submit').removeClass('loading').addClass('disabled');
        console.log('Success', res);
      }
    });
  }
});
