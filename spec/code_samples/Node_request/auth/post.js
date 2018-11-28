var request = require("request");

var options = { method: 'POST',
  url: 'https://cleanse.studio/api/v1/auth',
  headers: { 'content-type': 'application/json' },
  body:
   { email: '<ADD STRING VALUE>', password: '<ADD STRING VALUE>' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
