class Billete
{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    entregado = [];

    for (const billete of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / billete.valor);
            if (div > billete.cantidad) {
                papeles = billete.cantidad;
            } else {
                papeles = div;
            }

            entregado.push( new Billete(billete.valor, papeles) );
            dinero -= billete.valor * papeles;
        }
    }

    resultado.innerHTML = "";
    if (dinero > 0) {
        resultado.innerHTML = "No puedo darte esa cantidad :c";
    } else {
        for (const billete of entregado) {
            if (billete.cantidad > 0) {
                resultado.innerHTML += billete.cantidad + " billetes de $" + billete.valor + "<br/>";
            }
        }
    }
}

let dinero = 0;
let div = 0;
let papeles = 0;

let caja = [];
let entregado = [];

caja.push( new Billete(100,  5) );
caja.push( new Billete( 50, 10) );
caja.push( new Billete( 20,  5) );
caja.push( new Billete( 10, 10) );
caja.push( new Billete(  5,  5) );

var resultado = document.getElementById("resultado");
let btnExtraer = document.getElementById("extraer");
btnExtraer.addEventListener("click", entregarDinero );
