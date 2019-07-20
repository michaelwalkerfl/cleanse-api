var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://analyzemail.com/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE",
  "method": "DELETE",
  "headers": {
    "content-type": "application/json"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});