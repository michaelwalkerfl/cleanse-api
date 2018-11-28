var unirest = require("unirest");

var req = unirest("POST", "http://example.com/api/v1/list");

req.query({
  "username": "SOME_STRING_VALUE"
});

req.headers({
  "authorization": "Bearer REPLACE_BEARER_TOKEN",
  "content-type": "application/json"
});

req.type("json");
req.send({
  "filename": "<ADD STRING VALUE>",
  "emails": [
    "<ADD STRING VALUE>"
  ]
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
