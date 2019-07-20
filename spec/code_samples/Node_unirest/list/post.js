var unirest = require("unirest");

var req = unirest("POST", "https://analyzemail.com/api/v1/list");

req.query({
  "username": "SOME_STRING_VALUE"
});

req.headers({
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
