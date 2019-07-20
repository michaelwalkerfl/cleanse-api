var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://analyzemail.com/api/v1/lists/cleaned?username=SOME_STRING_VALUE",
  "method": "GET",
  "headers": {
    "content-type": "application/json"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});