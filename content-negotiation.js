function mediaRequest(url, type) {
  var xml = new XMLHttpRequest();
  xml.open("GET", url , true);
  xml.addEventListener("load", function() {
    console.log(xml.responseText);
  });
  xml.setRequestHeader("accept", type);
  xml.send(null);
}

var url = "http://eloquentjavascript.net/author";
var types = {plain: "text/plain", html: "text/html", json: "application/json"};
mediaRequest(url, types.plain);
mediaRequest(url, types.html);
mediaRequest(url, types.json);
