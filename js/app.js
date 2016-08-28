

function addition (numero1 , numero2)
{
  var numero1 = numero1;
  var numero2 = numero2;
  var resultado= numero1 + numero2;
  return document.write ( "the addition result is :" + resultado);
}
function substraction (numero1 , numero2)
{
  var numero1 = numero1;
  var numero2 = numero2;
  var resultado= numero1 - numero2;
  return document.write ( "the substraction result is :" + resultado);
}
function multiplication (numero1 , numero2)
{
  var numero1 = numero1;
  var numero2 = numero2;
  var resultado= numero1 * numero2;
  return document.write ( "the multiplication result is :" + resultado);
}
function division (numero1 , numero2)
{
  var numero1 = numero1;
  var numero2 = numero2;
  var resultado= numero1 / numero2;
  return document.write ( "the division result is :" + resultado);
}


var menu = prompt("Enter an option: addition, substraction, multiplication or division")
                
switch (menu)
  {
    case"addition":
    case"ADDITION":
    case"suma":
    var num1 = parseInt ( prompt ("enter a number")); 
    var num2 = parseInt ( prompt ("enter a number")); 
    addition (num1,num2 );
    break;
    
    case "substraction":
    case" SUBSTRACTION ":
    case"resta":
    var num1 = parseInt ( prompt ("enter a number")); 
    var num2 = parseInt ( prompt ("enter a number")); 
    substraction (num1,num2 );
    break;
      
    case "multiplication":
    case"MULTIPLICATION":
    case"multiplicación":
    var num1 = parseInt ( prompt ("enter a number")); 
    var num2 = parseInt ( prompt ("enter a number")); 
    multiplication (num1,num2 );
    break;
       
    case "division":
    case"DIVISION":
    case"división":
    var num1 = parseFloat( prompt ("enter a number")); 
    var num2 = parseFloat ( prompt ("enter a number")); 
    division (num1,num2 );
    break;
    
    default:
      alert( "enter a valid option, monse!")
  }