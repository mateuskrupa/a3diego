const express = require('express')
const app = express()
const cors = require('cors')
const db = require('../model/banco')

app.use(cors())
app.use(express.json())

db.connect()

lcpf = []

app.post("/livros", (req, res) => {


    result = []


    const {nome} = req.body;
    const {cpf} = req.body;
    const {idade} = req.body;
    const {cidade} = req.body;
    const {estado} = req.body;
    const {familia} = req.body;   
    
    const {p1} = req.body;
    const {p2} = req.body;
    const {p3} = req.body;
    const {p4} = req.body;
    const {p5} = req.body;
    const {p6} = req.body;
    const {p7} = req.body;
    const {p8} = req.body;
    const {p9} = req.body;
    const {p10} = req.body;
    const {p11} = req.body;
    const {p12} = req.body;
    const {p13} = req.body;
    const {p14} = req.body;

    var r1 = parseInt(p1)
    var r2 = parseInt(p2)
    var r3 = parseInt(p3)
    var r4 = parseInt(p4)
    var r5 = parseInt(p5)
    var r6 = parseInt(p6)
    var r7 = parseInt(p7)
    var r8 = parseInt(p8)
    var r9 = parseInt(p9)
    var r10 = parseInt(p10)
    var r11 = parseInt(p11)
    var r12 = parseInt(p12)
    var r13 = parseInt(p13)
    var r14 = parseInt(p14)


    result.push(r1)
    result.push(r2)
    result.push(r3)
    result.push(r4)
    result.push(r5)
    result.push(r6)
    result.push(r7)
    result.push(r8)
    result.push(r9)
    result.push(r10)
    result.push(r11)
    result.push(r12)
    result.push(r13)
    result.push(r14)


    var soma = 0;
    for(var i = 0; i < result.length; i++) {
    soma += result[i];}


    let situacao = ''
    if (soma === 0) {
        situacao = 'Segurança Alimentar'
    }

    else if (soma <= 5 && familia==='mista') {
        situacao = 'Insegurança Alimentar Leve'
    }

    else if (soma <= 9 && familia==='mista') {
        situacao = 'Insegurança Alimentar Moderada'
    }

    else if (soma <= 14 && familia==='mista') {
        situacao = 'Insegurança Alimentar Grave'
    }

    else if (soma <= 3 && familia==='adulta') {
        situacao = 'Insegurança Alimentar Leve'
    }

    else if (soma <= 5 && familia==='adulta') {
        situacao = 'Insegurança Alimentar Moderada'
    }

    else if (soma <= 8 && familia==='adulta') {
        situacao = 'Insegurança Alimentar Grave'
    }

    else if (soma <= 14 && familia==='adulta') {
        situacao = 'Insegurança Alimentar Grave'
    }


    console.log(result)
    console.log(soma)
    let sql = `INSERT INTO pessoa (nome, cpf, idade, cidade, estado, familia, pontos, situacao) VALUES ('${nome}', '${cpf}', '${idade}', '${cidade}', '${estado}', '${familia}', '${soma}', '${situacao}')`

    /*db.query(sql, (err) => {
        if (err) return res.json(err);

        return res.status(200).json("criado com sucesso")
    })*/
})

//CONSULTAR PROFESSOR
app.post("/consultar/pessoa", (req, res) => {
    let {cpf} = req.body;

    if(lcpf.length >= 1) {
        lcpf.pop()
        lcpf.push(cpf)
    }else{
        lcpf.push(cpf)  
    }   

})

app.get("/consultar/pessoa", (req, res) => {

    const cpf = lcpf[0]

    let sql = `SELECT * FROM pessoa WHERE cpf='${cpf}'`

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });

    
})



app.listen(5000, () => {
    console.log('Server running')
})