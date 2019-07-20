var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://analyzemail.com/api/v1/list?username=SOME_STRING_VALUE",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"filename\":\"<ADD STRING VALUE>\",\"emails\":[\"<ADD STRING VALUE>\"]}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});