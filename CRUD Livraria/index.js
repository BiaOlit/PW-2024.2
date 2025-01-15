import express from "express";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log("books Api listening at ${port}");
});

//Cada objeto livro deve ter, pelo menos, as propriedades id, titulo, autor, editora, ano, quant, preço
const db = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    editora: "Carambaia",
    ano: 1899,
    quant: 23,
    preco: 45,
  },
  {
    id: 2,
    titulo: "Nadando no Escuro",
    autor: "Tomasz Jedrowski",
    editora: "Intrinseca",
    ano: 2024,
    quant: 13,
    preco: 50,
  },
  {
    id: 3,
    titulo: "Iracema",
    autor: "José de Alencar",
    editora: "Typ. de Viana & Filhos",
    ano: 1865,
    quant: 103,
    preco: 30,
  },
  {
    id: 4,
    titulo: "Um Dia",
    autor: "David Nicholls",
    editora: "Intrinseca",
    ano: 2009,
    quant: 18,
    preco: 35,
  },
  {
    id: 5,
    titulo: "Os Bruzundangas",
    autor: "Lima Barreto",
    editora: "Vermelho Marinho",
    ano: 1922,
    quant: 18,
    preco: 27,
  },
];

app.get("/books", (req, res) => {
  res.json(db);
});

app.get("/books/:id", (req, res) => {
  const book = db.find((u) => u.id === parseInt(req.params.id));
  res.json(book);
});

//Implementar uma operação para buscar os livros de uma determinada editora
app.get("/books/edi/:editora", (req, res) => {
  const book = db.filter((u) => u.editora.includes(req.params.editora));
  res.json(book);
});

//Implementar operação para buscar o livro que o título possui uma palavra chave específica
app.get("/books/ttl/:titulo", (req, res) => {
  const book = db.filter((u) => u.titulo.includes(req.params.titulo));
  res.json(book);
});

//Implementar operação para buscar os livros acima de um determinado preço
app.get("/books/precoAcima/:preco", (req, res) => {
  const book = db.filter((u) => u.preco > req.params.preco);
  res.json(book);
});

//Implementar operação para buscar os livros abaixo de um determinado preço
app.get("/books/precoAbaixo/:preco", (req, res) => {
  const book = db.filter((u) => u.preco < req.params.preco);
  res.json(book);
});

//Implementar operação para buscar os livros mais recentes
app.get("/books/recentes", (req, res) => {
  const anoAtual = new Date().getFullYear();
  const book = db.filter((u) => u.ano >= anoAtual - 2);
  res.json(book);
});

//Implementar operação para buscar os livros mais antigos
app.get("/books/antigos", (req, res) => {
  const anoAtual = new Date().getFullYear();
  const book = db.filter((u) => u.ano < anoAtual - 50);
  res.json(book);
});


//Implementar operação para buscar os livros sem estoque

app.get("/books/semEst", (req, res) => {
  const books = db.filter((u) => u.quant === 0);
  res.json(books);
});
//Em caso de acesso a um endpoint inexistente deve ser exibido o erro 404

app.use((req, res) => {
  res.status(404).send("Endpoint não encontrado.");
});

//Implementar as operações CRUD básicas
app.post("/books", (req, res) => {
  let lastId = Math.max(...db.map((u) => u.id));
  const book = {
    id: ++lastId,
    titulo: req.body.titulo,
    autor: req.body.autor,
    editora: req.body.editora,
    ano: req.body.ano,
    quant: req.body.quant,
    preco: req.body.preco,
  };
  db.push(book);
  res.json(db);
});

app.delete("/books/:id", (req, res) => {
  db = db.filter((u) => u.id !== req.params.id);
  res.json(db);
});

app.put("/books/:id", (req, res) => {
  const index = db.findIndex((u) => u.id === parseInt(req.params.id));
  db[index] = {
    id: req.params.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    editora: req.body.editora,
    ano: req.body.ano,
    quant: req.body.quant,
    preco: req.body.preco,
  };

  res.json(db);
});
