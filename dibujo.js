var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton,addEventListener("click", dibujoPorClick);


var d = document.getElementById ("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath ();
  lienzo.strokeStyle = color;
  lienzo.moveTo (xinicial,yinicial);
  lienzo.lineTo (xfinal,yfinal);
  lienzo.stroke ();
  lienzo.closePath ();
}
function dibujoPorClick()
{

  var lineas =parseInt(texto.value) ;
  var l = 0;
  var yi, xf, yf, xi;
  var yi, yf;
  var espacio = ancho / lineas;

  while (l < lineas)
  {
    yi= espacio  * l;
    xf= espacio * (l+ 1);
    yf= espacio * l;
    xi= espacio * (l+ 1);
    yi= espacio * l;
    yf= espacio * l;
  dibujarLinea("blue", 0, yi, xf, 300);
  dibujarLinea("blue", yf, 0, 300, xi);
  dibujarLinea("red", xi, 0, 300, yf);
  dibujarLinea("red", 0, xf, yi, 300);
  console.log("lineas" + l);
  l = l + 1;

  }
  dibujarLinea("blue", 1,1,1,299);
  dibujarLinea("blue", 1,299,299,299);

}
