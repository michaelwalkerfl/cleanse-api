var data = JSON.stringify({
  "filename": "<ADD STRING VALUE>",
  "emails": [
    "<ADD STRING VALUE>"
  ]
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://cleanse.studio/api/v1/list?username=SOME_STRING_VALUE");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);