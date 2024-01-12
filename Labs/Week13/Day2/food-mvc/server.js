// import express from 'express';
const  express = require('express');

const app = express();
const PORT = 5000;

const fruits = require('./modules/fruits');

// root
app.get('/', (req, res)=>{
    res.send('Hello World!')
});

// index
app.get('/fruits', (req, res)=>{
    res.send(fruits)
});

// show
app.get('/fruits/:id', (req, res)=>{
    res.send(fruits[req.params.id])
});

app.listen(PORT, (req, res)=>{
    console.log(`Listening to port: ${PORT}`)
})