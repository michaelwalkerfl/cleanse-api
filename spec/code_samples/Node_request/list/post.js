var request = require("request");

var options = { method: 'POST',
  url: 'https://analyzemail.com/api/v1/list',
  qs: { username: 'SOME_STRING_VALUE' },
  headers: { 'content-type': 'application/json' },
  body:
   { filename: '<ADD STRING VALUE>',
     emails: [ '<ADD STRING VALUE>' ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
