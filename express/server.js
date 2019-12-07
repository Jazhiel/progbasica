const express = require('express');
const app = express();

app.get('/', function (peticion, resultado) {
  resultado.send('Hello World and <strong>Jaazhiel</strong>');
});

app.get('/cursos', cursos );

function cursos(peticion, resultado) {
    resultado.send('<strong>Estos son los cursos</strong>');
}

app.listen(3000);