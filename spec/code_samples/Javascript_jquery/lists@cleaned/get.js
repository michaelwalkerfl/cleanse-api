var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://example.com/api/v1/lists/cleaned?username=SOME_STRING_VALUE",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer REPLACE_BEARER_TOKEN"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});