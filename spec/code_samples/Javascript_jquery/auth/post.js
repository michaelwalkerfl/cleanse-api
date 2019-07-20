var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://analyzemail.com/api/v1/auth",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"email\":\"<ADD STRING VALUE>\",\"password\":\"<ADD STRING VALUE>\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});