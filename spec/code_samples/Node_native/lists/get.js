var http = require("http");

var options = {
  "method": "GET",
  "hostname": "example.com",
  "port": null,
  "path": "/api/v1/lists?username=SOME_STRING_VALUE",
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