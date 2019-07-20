var http = require("https");

var options = {
  "method": "GET",
  "hostname": "analyzemail.com",
  "port": null,
  "path": "/api/v1/lists/cleaned?username=SOME_STRING_VALUE",
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