//funcion para cifrar nuestra cadena de texto
function cipher(myString){
 var stringUpperCase = myString.toUpperCase(); //
  var myStringCipher = '';
  for (var i = 0 ; i < myString.length ; i++){
   var numberOfTheLetter = stringUpperCase.charCodeAt(i); //numero de la letra en el codigo AISSII
   var cipherFormula = ( numberOfTheLetter - 65 + 33) % 26 + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra en el codigo AISSII
   var theNewLetter =  String.fromCharCode(cipherFormula); // obtener el valor de la letra cifrada
   myStringCipher +=theNewLetter; // formar el string cifrado
  }
  return myStringCipher;
}

//funcion para descifrar cadena de texto
function decipher(myString){
  var stringUpperCase = myString.toUpperCase();
  var myStringDechiper ='';
  for(var i = 0; i< myString.length ; i++){
     var numberOfTheLetter = stringUpperCase.charCodeAt(i);
     var decipherFormula = ( numberOfTheLetter -13 - 33) % 26 + 65; // formula para descifrar
     var theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
     myStringDechiper +=theNewLetter;
  }
  return myStringDechiper;
}


function dataUser (option){
  var userText;
  var verification;
  switch(true){
  case (option === 1):
    userText = prompt('¿Qué texto desea cifrar? (Por favor ingresar un texto)');
    verification = parseInt(userText);
    while(verification >=0 || verification <=0 || userText === ''){
       userText=prompt('¿Qué texto desea cifrar? (Por favor ingresar un texto)');
       verification = parseInt(userText);
    }
    alert(cipher(userText));
    break;

  case (option === 2):
    userText = prompt('¿Qué texto desea descifrar? (Por favor ingresar un texto)');
    verification = parseInt(userText);
    while(verification >=0 || verification <=0 || userText === ''){
       userText=prompt('¿Qué texto desea decifrar? (Por favor ingresar un texto)');
       verification = parseInt(userText);
    }
    alert(decipher(userText));
    break;
  }
}
do{
  var menu = 'Por favor escribir 1 si desea cifrar un texto \n Por favor escribir 2 si desea descifrar un texto \n Por favor escribir 3 si desea salir del sistema';
  var option = parseInt(prompt(menu));
  dataUser(option);
}while( option !== 3 && typeof(option) === 'number');
