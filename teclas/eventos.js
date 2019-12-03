const teclas = {
    LEFT:  37,
    UP:    38,
    RIGHT: 39,
    DOWN:  40
}

document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("area_de_dibujo");
cuadrito.addEventListener("mousedown", mouseDown);
cuadrito.addEventListener("mouseup", mouseUp);
cuadrito.addEventListener("mousemove", dibujarMouse);
let papel = cuadrito.getContext("2d");
let x = 150;
let y = 150;
let xMouse = 0;
let yMouse = 0;
let xfMouseTmp = 0;
let yfMouseTmp = 0;
let puedoDibujar = false;

// dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, x1, y1, x2, y2, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

function borrarLinea(x1, y1, x2, y2, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = "white";
    lienzo.lineWidth = 7;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    let colorcito = "blue";
    let movimiento = 1;
    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x -= movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y -= movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x += movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y += movimiento;
            break;
        default:
            break;
    }
}

function mouseDown(evento) {
    puedoDibujar = true;
    xMouse = evento.clientX;
    yMouse = evento.clientY;
}

function mouseUp(evento) {
    puedoDibujar = false;
    // let colorcito = "green";
    // dibujarLinea(colorcito, xMouse, yMouse, evento.clientX, evento.clientY, papel);
}

function dibujarMouse(evento) {
    if (puedoDibujar) {
        // borrarLinea(xMouse, yMouse, xfMouseTmp + 1, yfMouseTmp + 1, papel);

        xfMouseTmp = evento.clientX;
        yfMouseTmp = evento.clientY;
        let colorcito = "green";

        dibujarLinea(colorcito, xfMouseTmp - 1, yfMouseTmp - 1, xfMouseTmp + 1, yfMouseTmp + 1, papel);
    }
}