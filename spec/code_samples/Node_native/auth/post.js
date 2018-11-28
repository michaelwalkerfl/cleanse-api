var http = require("http");

var options = {
  "method": "POST",
  "hostname": "example.com",
  "port": null,
  "path": "/api/v1/auth",
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

req.write(JSON.stringify({ email: '<ADD STRING VALUE>', password: '<ADD STRING VALUE>' }));
req.end();