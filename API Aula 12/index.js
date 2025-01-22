import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use((req, res, next) => {
    console.log(`Acesso ao endpoint: ${req.originalUrl}`);
    next();
});


app.get('/preco/usd', async (req, res) => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
        res.render('preco', { data: response.data, moeda: 'USD' });
    } catch (error) {
        console.error('Erro ao acessar a API:', error);
        res.render('erro', {
            titulo: 'Erro na API',
            mensagem: 'Erro ao acessar o serviço externo',
            detalhes: error.message,
        });
    }
});


app.get('/preco/eur', async (req, res) => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json');
        res.render('preco', { data: response.data, moeda: 'EUR' });
    } catch (error) {
        console.error('Erro ao acessar a API:', error);
        res.render('erro', {
            titulo: 'Erro na API',
            mensagem: 'Erro ao acessar o serviço externo',
            detalhes: error.message,
        });
    }
});


app.get('/preco/gbp', async (req, res) => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/GBP.json');
        res.render('preco', { data: response.data, moeda: 'GBP' });
    } catch (error) {
        console.error('Erro ao acessar a API:', error);
        res.render('erro', {
            titulo: 'Erro na API',
            mensagem: 'Erro ao acessar o serviço externo',
            detalhes: error.message,
        });
    }
});

app.use((req, res) => {
    res.render('erro', {
        titulo: 'Página Não Encontrada',
        mensagem: 'Erro 404',
        detalhes: 'A página que você procura não existe.',
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
