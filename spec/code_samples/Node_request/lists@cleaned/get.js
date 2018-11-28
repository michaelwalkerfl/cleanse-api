var request = require("request");

var options = { method: 'GET',
  url: 'https://cleanse.studio/api/v1/lists/cleaned',
  qs: { username: 'SOME_STRING_VALUE' },
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
