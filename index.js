const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = 3000;
app.use(bodyParser.json());
app.use(cookieParser());

let usuarios = [];

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

app.get('/user', (request, response) => {
    response.send("Usuario: Sandra Alejandra Guerrero Flores");
});

app.get('/body', (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

app.get('/cookie', (request, response) => {
    console.log(request.cookie);
    response.send(request.cookie);
});

app.get('/usuarios', (request, response) => {
    console.log(request.cookies);
    response.status(200).send(usuarios);
});

app.post('/usuarios', (request, response) => {
    console.log(request.body);
    if (request.body.username && request.body.correo) {
        usuarios.push(request.body);
        response.status(201).send("Ya se agregó");
    } else {
        response.status(400).send({ error: "No se agregó" });
    }
});

