var unirest = require("unirest");

var req = unirest("DELETE", "https://cleanse.studio/api/v1/list/cleaned/%7Blist_name%7D");

req.query({
  "username": "SOME_STRING_VALUE"
});

req.headers({
  "content-type": "application/json"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
