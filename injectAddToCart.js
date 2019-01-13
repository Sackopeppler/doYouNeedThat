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
                    +     '<option value="false" selected>Nein</option>'
                    +     '<option value="true">Ja</option>'
                    +   '</select>'
                    + '</div>';
popup.innerHTML +=    '<div id="vorteil" class="dynt-qbox" style="display: none">'
                    +   '<label for="tbVorteil">Welchen Vorteil bietet dir das Produkt?</label>'
                    +   '<textarea id="tbVorteil" name="tbVorteil" rows="4" cols="50"></textarea>'
                    + '</div>';
popup.innerHTML +=    '<div class="dynt-qbox">'
                    +   '<label for="selNutzungsdauer">Wie lange wirst du das Produkt voraussichtlich verwenden?</label>'
                    +   '<select id="selNutzungsdauer" name="selNutzungsdauer">'
                    +     '<option value="3" selected>Häufig</option>'
                    +     '<option value="2">Ab und zu</option>'
                    +     '<option value="1">Selten</option>'
                    +     '<option value="0">Einmalig</option>'
                    + '</div>';
popup.innerHTML += '<div id="btn_addToCart" class="a-button-stack"><span id="submit.add-to-cart" class="a-button a-spacing-small a-button-primary a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input id="add-to-cart-button" name="submit.add-to-cart" type="submit" form="addToCart" title="In den Einkaufswagen" data-hover="Wählen Sie <b>__dims__</b> auf der linken Seite<br> zum Hinzufügen zum Einkaufswagen" class="a-button-input" type="button" value="In den Einkaufswagen" aria-labelledby="submit.add-to-cart-announce"><span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">In den Einkaufswagen</span></span></span></div>';

document.body.appendChild(popup);

var ogAddToCartBtn = document.getElementById('add-to-cart-button');

if(ogAddToCartBtn != null) {
  ogAddToCartBtn.setAttribute('type', 'button'); // was submit before
  ogAddToCartBtn.setAttribute('onclick', 'popup.show()');
}

function showHideVorteil(elem) {
  if(elem.value == "true") {
    document.getElementById("vorteil").style.display = "block";
  } else {
    document.getElementById("vorteil").style.display = "none";
  }
}
