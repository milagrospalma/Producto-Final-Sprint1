var card = prompt('Ingrese su número de tarjeta');
isValidCard(card);

var isValidCard = function(cardNumber) {
  //undefined para consola y null para interfaz
  if (cardNumber === undefined || cardNumber === null) {
    alert('¡Hasta pronto!');
    return false;
  }
  if (containletters(cardNumber)) {
    alert('Número de tarjeta no puede contener letras.');
    return false;
  }
  if (cardNumber.length === 0) {
    alert('No puede ingresar un dato vacio.');
    return false;
  }
  // convierte un array y lo invierte
  var reverseArray = Array.from(cardNumber).reverse();
  var sumElements = 0;
  for (var i = 0; i < reverseArray.length; i++) {
    // 1 porque el indice empieza en 0 y %2 para ver si es par
    if ((i + 1) % 2 === 0) {
      reverseArray[i] = reverseArray[i] * 2;
      // Si la múltiplicación es >= 10, resta -9 para que obtener la suma de los dos digitos.
      if (reverseArray[i] >= 10) {
        reverseArray[i] = reverseArray[i] - 9;
      }
    }
    sumElements += parseInt(reverseArray[i]);
  }
  return sumElements % 10 === 0
    ? alert('¡Felicitaciones! Su tarjeta es válida')
    : alert('Lo sentimos, su tarjeta no es válida.');
};

var containletters = function(text) {
  text = text.toLowerCase();
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) >= 'a' && text.charAt(i) <= 'z') {
      return true;
    }
  }
  return false;
};
