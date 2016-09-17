$(function(){
  //TODO: Require Login
  var reserve_id = 'hogehoge';
  var map_downloaded = access_downloaded = keybox_downloaded = false;

  //Download
  $(document).on('click', '#download-map', function(e){
    e.preventDefault();
    if(!map_downloaded) {
      submitDownloadLog({'id': reserve_id, 'type': 'howtogo.jpg'});
      map_downloaded = true;
    }
    var url = '/img/howtogo.jpg';
    window.open(url, '_blank');
  });
  $(document).on('click', '#download-access', function(e){
    e.preventDefault();
    if(!access_downloaded) {
      submitDownloadLog({'id': reserve_id, 'type': 'access.pdf'});
      access_downloaded = true;
    }
    var url = '/img/access.pdf';
    window.open(url, '_blank');
  });
  $(document).on('click', '#download-keybox', function(e){
    e.preventDefault();
    if(!keybox_downloaded) {
      submitDownloadLog({'id': reserve_id, 'type': 'howtoopen.jpg'});
      keybox_downloaded = true;
    }
    var url = '/img/howtoopen.jpg';
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

  $(document).on('submit', '#form', function(e){
    e.preventDefault();
    $('#submit').addClass('loading');
    var data = $(this).serialize();
    data += '&RESERVATION_ID='+reserve_id;

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
