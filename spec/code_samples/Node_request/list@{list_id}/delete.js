var request = require("request");

var options = { method: 'DELETE',
  url: 'https://cleanse.studio/api/v1/list/%7Blist_id%7D',
  qs: { username: 'SOME_STRING_VALUE' },
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
