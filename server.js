const express = require('express');
const app = express();
const hbs = require('hbs');

//Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jose'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, function() {
    console.log(`App escuchando el puerto ${port}!`);
});