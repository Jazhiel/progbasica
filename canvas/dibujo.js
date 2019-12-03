let texto = document.getElementById("txtLineas");
let boton = document.getElementById("btnLineas");

boton.addEventListener("click", this.dibujoPorClick);

var d = document.getElementById("dibujito");
//funcion para obtener el area dibujar es decir el liezo
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, x1, y1, x2, y2) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    let lineas = parseInt(texto.value);
    let espacio = ancho/lineas;
    var color = "#AAF";
    var yi, xf;
    var l = 0;

    while ( l < lineas ) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(color, 0, yi, xf, ancho);
        //dibujarLinea("#AAF", l * espacio, 0, 300, espacio + (l * espacio));
        l++;
    }

    dibujarLinea(color, 1, 1, 1, ancho-1);
    dibujarLinea(color, 1, ancho-1, ancho-1, ancho-1);
}