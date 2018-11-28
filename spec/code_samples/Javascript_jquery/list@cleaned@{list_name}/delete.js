var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://example.com/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE",
  "method": "DELETE",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer REPLACE_BEARER_TOKEN"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});