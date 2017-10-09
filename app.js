
 
 function isValidCard(cardNumber) {
  var string = cardNumber.toString();
  cardNumber !== undefined
  cardNumber === parseInt(prompt('Ingrese el número de su tarjeta de crédito'));
  var cardlength = string.length;
  var sum = 0;
 for (var i = 0; i < cardlength; i=i+2) {
   var numbers = parseInt(string.charAt(i)) * 2;
   if(numbers >= 10) {
     var numbersCard = numbers.toString()
     numbers = parseInt(numbersCard.charAt(0)) + parseInt (numbersCard.charAt(1));
   }
   sum = sum +numbers;
 } for( var i = 1; i <cardlength; i= i+2) {
  sum = sum + parseInt(string.charAt(i));
 }
  if(sum % 10 === 0) {
    alert("Has ingresado un número de tarjeta correcto");
  } else {
    alert("Has ingresado un número de tarjeta incorrecto")
  }

   }
