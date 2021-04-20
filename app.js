const express = require ('express');
const app = express();

// http://localhost:3000/
app.get ('/', (req,res) => {
    res.send('Olá Mundo!!!');
});

let usuarios = {nome: 'Fillipe', sobrenome: 'F. Monteiro'};

app.get('/usuarios', (req,res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log('O servidor está rodando...');
});