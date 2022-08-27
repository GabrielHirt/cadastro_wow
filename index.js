const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { appendFile, appendFileSync } = require('fs');
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencorder({extended:false}));

app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
})); app.set('view engine', 'hbs');

app.post('/cad', (req, res)=>{
    res.send(req.body.nome);
    res.send(req.body.nick);
    res.send(req.body.email);
    res.send(req.body.password);
});

app.get('/', (req, res)=>{
    res.send('<h1> Hello dude!</h1>');
});

appendFile.listen(PORT, ()=>{
    console.log(`Servidor rodando em http:localhost:${PORT}`);
});