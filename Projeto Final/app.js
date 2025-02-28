require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Conectado!'))
    .catch(err => console.log('Erro de conexão com MongoDB: ', err));


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.use(session({
    secret: 'star',  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  
}));


const indexRoutes = require('./routes/index');
const blogRoutes = require('./routes/blog');
const albumRoutes = require('./routes/albums');
const memberRoutes = require('./routes/members');
const agendaRoutes = require('./routes/agenda');

app.use('/', indexRoutes);
app.use('/blog', blogRoutes);
app.use('/discografia', albumRoutes);
app.use('/integrantes', memberRoutes);
app.use('/agenda', agendaRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
