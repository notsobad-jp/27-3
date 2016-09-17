$(function(){
  var url = "https://us11.api.mailchimp.com/3.0/lists/96d3db4d21/members/"
  var data = {
    "apikey": "95142abbe5830c597e6d087f327014db-us11",
    "email_address": "hogehoge@notsobad.jp",
    "status": "subscribed",
    "merge_fields": {
      "NAME": "a",
      "PASSPORT": "a",
      "ADDRESS": "a",
      "NATIONAL": "a",
      "PHONE": "a",
      "OCCUPY": "a"
    }
  }

/*
  $(document).on('click', '#submit', function(e){
    submitMailchimp();
    e.preventDefault();
  });
*/


  //function submitMailchimp() {
  /*
    $.ajax({
        url: url,
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
  */
  //}
});
