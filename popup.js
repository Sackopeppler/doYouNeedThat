chrome.storage.sync.get({einkaeufe: []}, function(result) {
  Array.prototype.forEach.call(result.einkaeufe, einkauf => {
    document.body.innerHTML += '<a href="einkauf.html?id=' + einkauf.id + '">Einkauf vom ' + dateFormat(einkauf.datum) + '</a><br/>';
  });
});

function dateFormat(ms) {
  var datum = new Date(ms);
  return "" + datum.getDate() + "." + (datum.getMonth() + 1) + "." + datum.getFullYear();
}
