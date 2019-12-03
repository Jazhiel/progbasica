const teclas = {
    LEFT:  37,
    UP:    38,
    RIGHT: 39,
    DOWN:  40
}
document.addEventListener("keydown", dibujarTeclado);
let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let vacasRand = aleatorio( 1, 5 );
let cerdosRand = aleatorio( 1, 5 );
let pollosRand = aleatorio( 1, 5 );

let fondo = {
    url: "tile.png",
    cargaOk: false
};

let vaca = {
    url: "vaca.png",
    cargaOk: false
};

let cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    x: 250,
    y: 250
};

let pollo = {
    url: "pollo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo );

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas );

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos );

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos );

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}

function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.LEFT:
            cerdo.x -= 10;
            break;
        case teclas.UP:
            cerdo.y -= 10;
            break;
        case teclas.RIGHT:
            cerdo.x += 10;
            break;
        case teclas.DOWN:
            cerdo.y += 10;
            break;
        default:
            break;
    }
    dibujar();
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        for (let i = 0; i < vacasRand; i++) {
            let x = aleatorio(0,7) * 60;
            let y = aleatorio(0,7) * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOk) {
        papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
        for (let i = 0; i < cerdosRand; i++) {
            let x = aleatorio(0,7) * 60;
            let y = aleatorio(0,7) * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (pollo.cargaOk) {
        for (let i = 0; i < pollosRand; i++) {
            let x = aleatorio(0,7) * 60;
            let y = aleatorio(0,7) * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, max) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}