const express = require('express');

const app = express();

app.get('/', function(req, res, next) {
    res.sendFile('./index.html');
});

app.listen(3000);
