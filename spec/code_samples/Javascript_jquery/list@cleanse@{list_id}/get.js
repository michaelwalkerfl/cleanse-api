var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://analyzemail.com/api/v1/list/cleanse/%7Blist_id%7D?username=SOME_STRING_VALUE",
  "method": "GET",
  "headers": {
    "content-type": "application/json"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});