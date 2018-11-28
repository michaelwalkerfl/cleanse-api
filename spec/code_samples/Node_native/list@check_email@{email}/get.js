var http = require("https");

var options = {
  "method": "GET",
  "hostname": "cleanse.studio",
  "port": null,
  "path": "/api/v1/list/check_email/%7Bemail%7D?username=SOME_STRING_VALUE",
  "headers": {
    "content-type": "application/json"
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