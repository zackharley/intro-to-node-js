const fs = require('fs');
const path = require('path');

module.exports = {
    createUser,
    deleteUser,
    getUsers,
    updateUser
};

const DB_PATH = path.resolve(__dirname, 'db.json');

function createUser(user, callback) {
    const users = JSON.parse(fs.readFileSync(DB_PATH));

    users.push(user);

    fs.truncateSync(DB_PATH, 0);
    fs.writeFileSync(DB_PATH, users);

    callback(null, user);
}

function deleteUser(userId, callback) {
    let users = JSON.parse(fs.readFileSync(DB_PATH));
    let userToDelete = {};

    users = users.filter(function(user) {
        if (user.id === userId) {
            userToDelete = user;
            return false;
        }
         return true;
    });

    fs.truncateSync(DB_PATH, 0);
    fs.writeFileSync(DB_PATH, users);

    callback(null, userToDelete);
}

function getUsers(callback) {
    const users = JSON.parse(fs.readFileSync(DB_PATH));
    callback(null, users);
}

function updateUser(userId, updatedFields, callback) {
    const users = JSON.parse(fs.readFileSync(DB_PATH));
    let updatedUser = {};

    users.map(function(user) {
        if (user.id === userId) {
            updatedUser = Object.assign({}, user, updatedFields);
            return updatedUser;
        }

        return user;
    });

    fs.truncateSync(DB_PATH, 0);
    fs.writeFileSync(DB_PATH, users);

    callback(null, updatedUser);
}
