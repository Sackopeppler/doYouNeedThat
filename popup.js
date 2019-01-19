chrome.storage.sync.get({einkaeufe: []}, function(result) {
  Array.prototype.forEach.call(result.einkaeufe, einkauf => {
    document.body.innerHTML += '<div class="einkauf"><a href="einkauf.html?id=' + einkauf.id + '">' + '<div class="datum">' + dateFormat(einkauf.datum) + ' -</div><div class="name">' + einkauf.name + '</div></a></div><br/>';
  });
});

function dateFormat(ms) {
  var datum = new Date(ms);
  return "" + datum.getDate() + "." + (datum.getMonth() + 1) + "." + datum.getFullYear();
}
