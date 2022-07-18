const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 3000;
const start = () => console.log('Starting express server...');  

server.listen(port,start());

const public = path.resolve(__dirname, './public');
const statics = express.static(public);

server.use(statics);

server.get('/', (req, res) => {
    let file = path.join(__dirname, 'views', 'home.html');
    res.sendFile(file);
});

server.get('/register', (req, res) => {
    let file = path.join(__dirname, 'views', 'register.html');
    res.sendFile(file);
});

server.get('/login', (req, res) => {
    let file = path.join(__dirname, 'views', 'login.html');
    res.sendFile(file);
});



