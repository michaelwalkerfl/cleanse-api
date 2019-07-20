var http = require("https");

var options = {
  "method": "POST",
  "hostname": "analyzemail.com",
  "port": null,
  "path": "/api/v1/list?username=SOME_STRING_VALUE",
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

req.write(JSON.stringify({ filename: '<ADD STRING VALUE>',
  emails: [ '<ADD STRING VALUE>' ] }));
req.end();