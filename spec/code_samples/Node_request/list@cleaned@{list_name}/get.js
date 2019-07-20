var request = require("request");

var options = { method: 'GET',
  url: 'https://analyzemail.com/api/v1/list/cleaned/%7Blist_name%7D',
  qs: { username: 'SOME_STRING_VALUE' },
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
