var popup = document.createElement('dialog');
popup.id = 'popupNeedThat';
popup.innerHTML =  '<h1>Brauchst du das wirklich?</h1>';
popup.innerHTML += '<h2>Wofür wirst du dieses Produkt verwenden?</h2>';
popup.innerHTML += '<textarea rows="4" cols="50"/>';
popup.innerHTML += '<h2>Hast du bereits ein ähnliches Produkt?</h2>';
popup.innerHTML += '<textarea rows="4" cols="50"/>';
popup.innerHTML += '<h2>Wie lange wirst du das Produkt voraussichtlich verwenden?</h2>';
popup.innerHTML += '<textarea rows="4" cols="50"/>';
popup.innerHTML += '<button type="submit">In den Einkaufwagen</button>';
popup.innerHTML += '<button type="button" onclick="popup.close()">Abbrechen</button>';

var addToCartForm = document.getElementById('addToCart');
if(addToCartForm != null) {
  addToCartForm.appendChild(popup);
}

var ogAddToCartBtn = document.getElementById('add-to-cart-button');

if(ogAddToCartBtn != null) {
  ogAddToCartBtn.setAttribute('type', 'button'); // was submit before
  ogAddToCartBtn.setAttribute('onclick', 'popup.show()');
}
