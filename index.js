const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
    console.log(req.ip + " has entered!")
})
app.get('/corn',(req,res) => {
    res.sendFile(__dirname + "/corn.html")
    console.log(req.ip + " likes corn!")
})
app.get('/pug',(req,res) => {
    res.sendFile(__dirname + "/pug.html")
    console.log(req.ip + " likes pugs!")
})
app.get('/error',(req,res) => {
    res.sendFile(__dirname + "/error.html")
    console.log(req.ip + " had an error!")
})
app.get('/hehE',(req,res) => {
    res.sendFile(__dirname + "/hehe.html")
    console.log(req.ip + " is hehEing")
})
app.get('/null',(req,res) => {
    res.sendFile(__dirname + "/null.html")
    console.log(req.ip + " is at null and is being redirected")
})
app.use((req, res, next) => {
    res.status(404).send("<h1>This is not the page you were looking for</h1>")
    console.log(req.ip + " couldn't find the page that they were looking for!")
})
app.listen(1234)