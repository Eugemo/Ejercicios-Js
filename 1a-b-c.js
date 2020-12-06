/*
var precio1 = 5
var precio2 = 3
var precio3 = 2

var  suma  =  precio1 + precio2 + precio3 ;
alert ( 'la suma es:' +  suma ) ;

var  promedio  =  suma / 3 ;
consola . log ( promedio )

var  precioConIVA  =  suma * 1.21
consola . registro ( precioConIVA )
*/

var precio1 = parseInt(prompt('Ingrese el primer precio' ));
var precio2 = parseInt(prompt('Ingrese el segundo precio'));
var precio3 = parseInt(prompt('Ingrese el tercer precio'));

var suma = precio1+precio2+precio3 
alert('La suma es:  '+suma)
document.write('La suma es: ' +suma + '<br>')

var promedio = suma/3;
alert('El promedio es: '+promedio)
document.write('El promedio  es:' +promedio+ '<br>')

var precioConIVA = suma * 1.21
alert('El total con IVA es: ' +precioConIVA)
document.write('El precio con Total con IVA (21%) es: $ ' +precioConIVA+ '<br>')
