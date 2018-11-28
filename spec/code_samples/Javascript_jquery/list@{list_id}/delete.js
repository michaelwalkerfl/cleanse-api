var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cleanse.studio/api/v1/list/%7Blist_id%7D?username=SOME_STRING_VALUE",
  "method": "DELETE",
  "headers": {
    "content-type": "application/json"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});