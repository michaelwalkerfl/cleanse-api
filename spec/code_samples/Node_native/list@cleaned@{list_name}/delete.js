var http = require("http");

var options = {
  "method": "DELETE",
  "hostname": "example.com",
  "port": null,
  "path": "/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer REPLACE_BEARER_TOKEN"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();