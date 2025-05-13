const express = require('express');
const app = express();
const port = 5000;

app.get ('/', (req, res) => {
    res.send("yo! this is my first ever server.")
})

app.listen (port, () => {
    console.log(`Your server is in the port of : ${port}`)
})
