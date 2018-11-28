var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://example.com/api/v1/auth",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer REPLACE_BEARER_TOKEN"
  },
  "processData": false,
  "data": "{\"email\":\"<ADD STRING VALUE>\",\"password\":\"<ADD STRING VALUE>\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});