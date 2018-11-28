var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cleanse.studio/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE",
  "method": "GET",
  "headers": {
    "content-type": "application/json"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});