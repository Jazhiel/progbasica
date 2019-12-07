//Array con valores asosiativos
//Quedan como si fueran objetos tipo json
let imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

let coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//forin recupera el indice
//forof recupera el objeto
for (const pakiman of coleccion) {
    pakiman.mostrar();
}
