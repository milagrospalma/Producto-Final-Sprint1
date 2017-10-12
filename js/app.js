//Muestra una ventana emergente solicitando el ingreso de datos
var card = prompt('Ingrese su número de tarjeta');
//Invocando la función
isValidCard(card);

// Es preferible primero realizar las validaciones para que no se ejecute la lógica antes de que se valide.
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

  // convertir a array e invertirlo
  var reverseArray = Array.from(cardNumber).reverse();

  // variable que contiene la suma
  var sumElements = 0;

  for (var i = 0; i < reverseArray.length; i++) {
    //console.log(reverseArray[i+1]);
    if ((i + 1) % 2 === 0) {
      console.log(reverseArray[i])
      // Se coloca 1 porque el indice empieza en 0 y %2 para ver si es par
      reverseArray[i] = reverseArray[i] * 2; // Se multiplica por 2 los números pares
      if (reverseArray[i] >= 10) {
        // Si la múltiplicación es >= 10, restar -9 para que te de la suma de los dos digitos.
        reverseArray[i] = reverseArray[i] - 9;
      }
    }
    sumElements += parseInt(reverseArray[i]); //Convertir cadena en entero
  }
  return sumElements % 10 === 0
    ? alert('¡Felicitaciones! Su tarjeta es válida')
    : alert('Lo sentimos, su tarjeta no es válida.');
};

//función creada para validar que no tenga letras
var containletters = function(text) {
  text = text.toLowerCase();
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) >= 'a' && text.charAt(i) <= 'z') {
      return true;
    }
  }
  return false;
};
