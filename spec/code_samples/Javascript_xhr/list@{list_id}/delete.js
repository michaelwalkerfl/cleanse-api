var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", "https://cleanse.studio/api/v1/list/%7Blist_id%7D?username=SOME_STRING_VALUE");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);