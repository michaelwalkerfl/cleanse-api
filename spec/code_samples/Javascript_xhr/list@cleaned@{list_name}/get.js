var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://example.com/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "Bearer REPLACE_BEARER_TOKEN");

xhr.send(data);