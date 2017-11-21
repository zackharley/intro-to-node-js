const express = require('express');
const db = require('./fakedb/index');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // parse JSON bodies

// Create
app.post('/users', function(req, res, next) {
    const user = req.body;
    db.createUser(user, function (err, createdUser) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error creating user');
        }

        res.status(201).send(createdUser);
    });
});

// Read
app.get('/users', function(req, res, next) {
    db.getUsers(function(err, users) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error getting users');
        }

        res.status(200).send(users);
    });
});

// Update
app.put('/users/:userId', function(req, res, next) {
    const userId = req.params.userId;
    const updatedFields = req.body;
    db.updateUser(userId, updatedFields, function(err, updatedUser) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error updating user');
        }

        res.status(200).send(updatedUser);
    });
});

// Delete
app.delete('/users/:userId', function(req, res, next) {
    const userId = req.params.userId;
    db.deleteUser(userId, function(err, deletedUser) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting user');
        }

        res.status(200).send(deletedUser);
    });
});

app.listen(3000);

