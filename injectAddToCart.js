var popup = document.createElement('dialog');
popup.id = 'popupNeedThat';
popup.innerHTML =  '<a href="javascript:void(0)" class="exit" onclick="popup.close()"></a>';
popup.innerHTML += '<h1>Brauchst du das wirklich?</h1>';
popup.innerHTML +=    '<div class="dynt-qbox">'
                    +   '<label for="tbWofuer">Wofür wirst du dieses Produkt verwenden?</label>'
                    +   '<textarea id="tbWofuer" name="tbWofuer" rows="4" cols="50"></textarea>'
                    + '</div>';
popup.innerHTML +=    '<div class="dynt-qbox">'
                    +   '<label for="aehnlichesProdukt">Hast du bereits ein ähnliches Produkt?</label>'
                    +   '<select id="aehnlichesProdukt" name="aehnlichesProdukt" onchange="showHideVorteil(this)">'
                    +     '<option value="Nein" selected>Nein</option>'
                    +     '<option value="Ja">Ja</option>'
                    +   '</select>'
                    + '</div>';
popup.innerHTML +=    '<div id="vorteil" class="dynt-qbox" style="display: none">'
                    +   '<label for="tbVorteil">Welchen Vorteil bietet dir das Produkt?</label>'
                    +   '<textarea id="tbVorteil" name="tbVorteil" rows="4" cols="50"></textarea>'
                    + '</div>';
popup.innerHTML +=    '<div class="dynt-qbox">'
                    +   '<label for="selNutzungsdauer">Wie oft wirst du das Produkt voraussichtlich verwenden?</label>'
                    +   '<select id="selNutzungsdauer" name="selNutzungsdauer" onchange="showHideAusleihen(this)">'
                    +     '<option value="Häufig" selected>Häufig</option>'
                    +     '<option value="Ab und zu">Ab und zu</option>'
                    +     '<option value="Selten">Selten</option>'
                    +     '<option value="Einmalig">Einmalig</option>'
                    + '</div>';
popup.innerHTML +=    '<div id="ausleihen" class="dynt-qbox" style="display: none">'
                    +   '<label for="selAusleihen">Kannst du das Produkt auch von jemandem ausleihen?</label>'
                    +   '<select id="selAusleihen" name="selAusleihen" >'
                    +     '<option value="Nein" selected>Nein</option>'
                    +     '<option value="Ja">Ja</option>'
                    +   '</select>'
                    + '</div>';
popup.innerHTML +=    '<div class="dynt-qbox">'
                    +   '<label for="selGebraucht">Kannst du das Produkt auch gebraucht kaufen?</label>'
                    +   '<select id="selGebraucht" name="selGebraucht">'
                    +     '<option value="Nein" selected>Nein</option>'
                    +     '<option value="Ja">Ja</option>'
                    +   '</select>'
                    + '</div>';
popup.innerHTML += '<div id="btn_addToCart" class="a-button-stack"><span id="submit.add-to-cart" class="a-button a-spacing-small a-button-primary a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input id="add-to-cart-button" name="submit.add-to-cart" type="submit" form="addToCart" onclick="save()" title="In den Einkaufswagen" data-hover="Wählen Sie <b>__dims__</b> auf der linken Seite<br> zum Hinzufügen zum Einkaufswagen" class="a-button-input" type="button" value="In den Einkaufswagen" aria-labelledby="submit.add-to-cart-announce"><span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">In den Einkaufswagen</span></span></span></div>';

document.body.appendChild(popup);

var ogAddToCartBtn = document.getElementById('add-to-cart-button');

if(ogAddToCartBtn != null) {
  ogAddToCartBtn.setAttribute('type', 'button'); // was submit before
  ogAddToCartBtn.setAttribute('onclick', 'popup.show()');
}

function showHideVorteil(elem) {
  if(elem.value == "Ja") {
    document.getElementById("vorteil").style.display = "block";
  } else {
    document.getElementById("vorteil").style.display = "none";
  }
}

function showHideAusleihen(elem) {
  if(elem.value == "Selten" || elem.value == "Einmalig") {
    document.getElementById("ausleihen").style.display = "block";
  } else {
    document.getElementById("ausleihen").style.display = "none";
  }
}

function save() {
  chrome.storage.sync.get({lastId: 0, einkaeufe: []}, function(result) {
    var einkaeufe = result.einkaeufe;
    var id = result.lastId;
    einkaeufe.push({ id: ++id,
                    datum: Date.now(),
                    name: document.getElementById("productTitle").textContent,
                    wofuer: document.getElementById("tbWofuer").value,
                    aehnlichesProdukt: document.getElementById("aehnlichesProdukt").value,
                    vorteil: document.getElementById("tbVorteil").value,
                    nutzungsdauer: document.getElementById("selNutzungsdauer").value,
                    ausleihen: document.getElementById("selAusleihen").value,
                    gebraucht: document.getElementById("selGebraucht").value});
    chrome.storage.sync.set({lastId: id, einkaeufe:  einkaeufe});
  });
}
