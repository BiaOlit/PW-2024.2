const app = require('./app');


const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Servidor iniciado na porta 5000');
});


server.on('error', (error) => {
    console.log('Erro no servidor:', error);
});
