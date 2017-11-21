const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', function(req, res, next) {
    const colourToFind = req.query.colour;

    const filePath = path.resolve(__dirname, 'colours.json');
    fs.readFile(filePath, function(err, file) {
        console.log('Executing callback!');
        if (err) {
            return res.status(500).send(err);
        }

        const colours = JSON.parse(file);

        let count = 0;

        colours.forEach(function(colour) {
            if (colour === colourToFind) {
                count += 1;
            }
        });

        if (count > 0) {
            res.status(200).send(`${colourToFind} was found ${count} times`);
        } else {
            res.status(422).send(`${colourToFind} was not found`);
        }
    });

    console.log('Executing code after an asynchronous function!');
});

app.listen(3000);

