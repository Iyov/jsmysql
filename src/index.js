const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const mysql = require('mysql');

// inittializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views', 'layouts') )
}))

// middlewares
app.use(morgan('dev'));

// Global Variables

// Routes
app.use(require('./routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});

//https://www.youtube.com/watch?v=qJ5R9WTW0_E min 24