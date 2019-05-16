const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.listen(port, () => console.log('server running'))

app.all('/hello', (request, response) => {
    response.send('hello world');
});

app.all('/bye', (request, response) => {
    response.send('Bye bye');
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/saludo', (request, response) => {
    response.status(200).send("Hola, Sandra!");
});

app.post('/despedida', (request, response) => {
    response.status(201).send("Adiós, Sandra!");
});

app.delete('/borrar', (request, response) => {
    response.status(401).send("Se borró");
});

app.all('*', (request, response, next) => {
    console.log("El usuario hizo petición a: ", request.path);
    next();
});

app.get('/sandra', (request, response) => {
    response.send("Sandra Alejandra");
});

app.get('/sandra', (request, response) => {
    response.send("Sandra Alejandra Guerrero Flores");
});

app.get('/usuario', (request, response) => {
    response.send("Usuario: Sandra Alejandra Guerrero Flores");
});
