var unirest = require("unirest");

var req = unirest("DELETE", "http://example.com/api/v1/list/%7Blist_id%7D");

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
