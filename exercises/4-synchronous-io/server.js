const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', function(req, res, next) {
    const colourToFind = req.query.colour;

    const filePath = path.resolve(__dirname, 'colours.json');
    const colours = JSON.parse(fs.readFileSync(filePath));

    let count = 0;

    colours.forEach(function(colour) {
        if (colour === colourToFind) {
            count += 1;
        }
    });

    if (count > 0) {
        res.status(200).send(`${colourToFind} was found ${count} times`);
    } else {
        res.status(422).send(`${colourToFind} was not found `);
    }
});

app.listen(3000);

