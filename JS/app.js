var cardnumber = prompt('Ingresar el número de tarjeta: ').split('');

function isValidCard(cardnumber){   //Declarar la función isValidCard
  var sum = 0;                      
  var cardnumber == 16;{
    for (var i=0; i<=cardnumber.length; i++){    //Ir incrementando la posición desde el valor 0
	    rever = parseInt(cardnumber[i].reverse);  //invertir el array y convertirlo a número
    }
    while((rever[i]===1)*2){          //multiplicar *2 cuando la posición empieza en 1
	    sum += cardnumber[i];         //sumar los digitos
    }
    if((sum%10===0)?true:false) /*si el residuo de la suma mod 10 es verdadera, la tarjeta es                                  válida*/
	alert('El número de tarjeta es válido');          //retornar cardnumber
  } 
}