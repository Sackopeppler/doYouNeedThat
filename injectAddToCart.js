var popup = document.createElement('dialog');
popup.id = 'popupNeedThat';
popup.innerHTML =  '<a href="javascript:void(0)" class="exit" onclick="popup.close()"></a>';
popup.innerHTML += '<h1>Brauchst du das wirklich?</h1>';
popup.innerHTML += '<h2>Wofür wirst du dieses Produkt verwenden?</h2>';
popup.innerHTML += '<textarea rows="4" cols="50"/>';
popup.innerHTML += '<h2>Hast du bereits ein ähnliches Produkt?</h2>';
popup.innerHTML += '<textarea rows="4" cols="50"/>';
popup.innerHTML += '<h2>Wie lange wirst du das Produkt voraussichtlich verwenden?</h2>';
popup.innerHTML += '<textarea rows="4" cols="50"/>';
popup.innerHTML += '<div class="a-button-stack"><span id="submit.add-to-cart" class="a-button a-spacing-small a-button-primary a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input id="add-to-cart-button" name="submit.add-to-cart" type="submit" title="In den Einkaufswagen" data-hover="Wählen Sie <b>__dims__</b> auf der linken Seite<br> zum Hinzufügen zum Einkaufswagen" class="a-button-input" type="button" value="In den Einkaufswagen" aria-labelledby="submit.add-to-cart-announce"><span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">In den Einkaufswagen</span></span></span></div>';

var addToCartForm = document.getElementById('addToCart');
if(addToCartForm != null) {
  addToCartForm.appendChild(popup);
}

var ogAddToCartBtn = document.getElementById('add-to-cart-button');

if(ogAddToCartBtn != null) {
  ogAddToCartBtn.setAttribute('type', 'button'); // was submit before
  ogAddToCartBtn.setAttribute('onclick', 'popup.show()');
}
