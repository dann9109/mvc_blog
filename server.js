const db = require('./db/connection');

const express = require('express');
require('dotenv').config()

const { engine } = require('express-handlebars');
const bcrypt = require('bcrypt');
const session = require('express-session');

const PORT = 5555;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));


// Load Routes
app.use('/api', [user_routes, recipe_routes, view_routes]);
app.use('/', [view_routes, form_routes]);

db.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        });
    });