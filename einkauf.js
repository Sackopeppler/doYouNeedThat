function getId() {
  return new URL(window.location.href).searchParams.get("id");
}

var selectedId = getId();
chrome.storage.sync.get({ einkaeufe: [] }, function(result) {
    Array.prototype.forEach.call(result.einkaeufe, einkauf => {
      if(einkauf.id == selectedId) {
        document.getElementById("wofuer").textContent = einkauf.wofuer;
        document.getElementById("aehnlichesProdukt").textContent = einkauf.aehnlichesProdukt;
        document.getElementById("vorteil").textContent = einkauf.vorteil;
        document.getElementById("nutzungsdauer").textContent = einkauf.nutzungsdauer;
        document.getElementById("ausleihen").textContent = einkauf.ausleihen;
        document.getElementById("gebraucht").textContent = einkauf.gebraucht;
      }
    });
});
