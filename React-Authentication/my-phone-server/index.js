const express = require('express');
const phones = require ('./phones.json');
const app = express();
const port = 5000;
const cors = require('cors')

app.use (cors())

app.get ('/', (req, res) => {
    res.send("My Phone Server!");
});

app.get ('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.listen(port, ()=>{
    console.log(`My Phone server is running on port : ${port}`)
});