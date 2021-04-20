const express = require ('express');
const app = express();
app.use (express.json());

// http://localhost:3000/
app.get ('/', (req,res) => {
    res.send('Olá Mundo!!!');
});

let usuarios = [{nome: 'Fillipe', sobrenome: 'F. Monteiro'}];

app.get('/usuarios', (req,res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req,res) =>{
    const {nome, sobrenome} = req.body;
    usuarios.push({ nome, sobrenome });
    res.json ({nome, sobrenome});
});

app.put('/usuarios/:nome', (req,res) => {
    const {nome} = req.params;
    const {sobrenome} = req.body;
})

app.listen(3000, () => {
    console.log('O servidor está rodando...');
});