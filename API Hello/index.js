import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('HELLO API on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello');
});


app.get('/v2/:name', (req, res) => {
  res.send('Hello, ' + req.params.name);
});

app.get('/v2/:name/json', (req, res) => {
  res.json({'msg': 'Hello, ' + req.params.name});
});

app.get('/v2/*', (req, res) => {
  res.json({'err': 'invalid endpoint'});
});


//pt-br
app.get('/v3/pt-br/:name', (req, res) => {
  res.send('Olá, ' + req.params.name);
});

app.get('/v3/pt-br/:name/json', (req, res) => {
  res.json({'msg': 'Olá, ' + req.params.name});
});

app.get('/v3/pt-br/*', (req, res) => {
  res.json({'err': 'Endpoint Inválido'});
});

// en
app.get('/v3/en/:name', (req, res) => {
  res.json('Hello, ' + req.params.name);
});

app.get('/v3/en/:name/json', (req, res) => {
  res.json({'msg': 'Hello, ' + req.params.name});
});

app.get('/v3/en/*'), (req, res) => {
  res.json({'err': 'Invalid Endpoint'})
}

// es
app.get('/v3/es/:name', (req, res) => {
  res.json('Hola, ' + req.params.name);
});

app.get('/v3/es/:name/json', (req, res) => {
  res.json({'msj': 'Hola, ' + req.params.name});
});

app.get('/v3/es/*'), (req, res) => {
  res.json({'err': 'Endpoint Inválido'})
}

