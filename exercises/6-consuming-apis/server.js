const express = require('express');
const request = require('request');
const render = require('./render');

const app = express();

app.get('/', function(req, res, next) {
    res.send('Please supply a GtiHub username as a URL parameter!');
});

app.get('/:username', function(req, res, next) {
    const username = req.params.username;

    const options = {
        url: `https://api.github.com/users/${username}`,
        headers: {
            'User-Agent': 'zackharley'
        }
    };

    request(options, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            body = JSON.parse(body);
            let user = {
                avatarUrl: body.avatar_url,
                profileUrl: body.html_url,
                name: body.name,
                bio: body.bio,
                location: body.location,
                repos: body.public_repos,
                followers: body.followers,
                following: body.following,
                username
            };

            res.send(render(user));
        } else {
            res.status(response.statusCode).send(error || body);
        }
    });
});

app.listen(3000);

