var unirest = require("unirest");

var req = unirest("GET", "http://example.com/api/v1/list/check_email/%7Bemail%7D");

req.query({
  "username": "SOME_STRING_VALUE"
});

req.headers({
  "authorization": "Bearer REPLACE_BEARER_TOKEN",
  "content-type": "application/json"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
