const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log('server running'))

app.all('/hello', (request, response) => {
    response.send('hello world');
});

app.all('/bye', (request, response) => {
    response.send('Bye bye');
});

app.use('/assets', express.static('assets'));