var unirest = require("unirest");

var req = unirest("DELETE", "https://analyzemail.com/api/v1/list/%7Blist_id%7D");

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
