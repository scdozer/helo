require('dotenv').config({path: '../.env'});
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// const checkForSession = require('./middlewares/checkForSession');
const port = 3005;


const app = module.exports = express();
const strategy = require('./auth0strategy');

app.use( bodyParser.json() );
app.use ( cors() );

app.use(session({
  secret: 'secretsecretsecret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);


// console.log(process.env);
massive(process.env.REACT_APP_CONNECTION_STRING).then( db => {
  // console.log(db)
    app.set('db', db)
})



app.listen (port, () => { console.log(`Listening like a boss on ${port}`)});