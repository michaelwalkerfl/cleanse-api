var request = require("request");

var options = { method: 'GET',
  url: 'http://example.com/api/v1/list/check_email/%7Bemail%7D',
  qs: { username: 'SOME_STRING_VALUE' },
  headers:
   { authorization: 'Bearer REPLACE_BEARER_TOKEN',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
