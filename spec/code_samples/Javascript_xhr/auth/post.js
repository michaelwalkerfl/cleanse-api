var data = JSON.stringify({
  "email": "<ADD STRING VALUE>",
  "password": "<ADD STRING VALUE>"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://analyzemail.com/api/v1/auth");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);