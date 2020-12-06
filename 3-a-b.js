var centig = parseInt(prompt('Ingrese la temperatura en Fahrenheit'))
f = (centig * 1.8) + 32;
alert(centig + ' centigrados son '+ f +' Fahrenheit')
document.write(centig + ' centigrados son '+ f +' Fahrenheit'+ '<br>')

var fahren = parseInt(prompt('Ingrese la temperatura en Centigrados'))
c = (fahren - 32) * 1.8;
alert(fahren + ' Fahrenheit son ' + c  + ' Centigrados')
document.write(fahren + ' Fahrenheit son ' + c  + ' Centigrados'+ '<br>')
