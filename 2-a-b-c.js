var largo = parseInt(prompt('Ingrese el largo del terreno a alambrar'));
var ancho = parseInt(prompt('Ingrese el ancho del terreno a alambrar'));

var perimetro = (largo * 2) + ( ancho * 2 );
var cant = perimetro * 3;
alert('Necesita '+ cant +'mts de alambre')
document.write('Para el terreno rectangular necesita '+ cant +'mts de alambre'+'<br>')
document.write('-----------------------------'+'<br>')
var radio = parseInt(prompt('Ingrese el radio del terreno a alambrar'));
const pi = 3.14

var perCirculo = 2 * pi * radio;
var cant = perCirculo * 3;
alert('Necesita '+ cant +'mts de alambre')
document.write('Para el terreno circular necesita '+ cant +'mts de alambre'+'<br>')
document.write('-----------------------------'+'<br>')

var mtsCuad = parseInt(prompt('Ingrese los metros cuadrados de contrapiso'))
var cemento = mtsCuad * 2
var cal = mtsCuad * 3
alert('Necesita '+ cemento +' bolsas de cemento y '+cal+' bolsas de cal')
document.write('Para el contrapiso necesita: '+ cemento +' bolsas de cemento y '+cal+' bolsas de cal')
