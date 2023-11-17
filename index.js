const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola estudiantes de Gerenciales 2!!!'));

app.listen(port, () =>{
    console.log('La aplicación está escuchando en http://localhost:3000');
})