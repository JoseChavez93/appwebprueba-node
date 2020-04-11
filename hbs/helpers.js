const hbs = require('hbs');

//Helpers
hbs.registerHelper('obtenerAño', () => {
    return new Date().getFullYear();
});