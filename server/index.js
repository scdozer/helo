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


var app = module.exports = express();
const strategy = require('./auth0strategy');

app.use ( cors() );
app.use( bodyParser.json() );


app.use(session({
  secret: 'secretsecretsecret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
})




app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: 'http://localhost:3000/auth/'
}))


passport.serializeUser(function(user, done){
  console.log('serialize user', user);
  done(null, user); //stores to the session what we tell it to
})

passport.deserializeUser(function(user, done){
  console.log('deserialize user', user);
  return done(null, user)
  // console.log('user2', user);
  const db = app.get('db');
  db.find_user([user])
  .then( user => {
      return done(null, user)
    })
})

app.get('/auth/me', (req, res, next) =>{
  console.log(req.user);
  if(!req.user){
    return res.status(401).send('Log in required');
  } else {
    return res.status(200).send(req.user);
  }
})

app.get('/auth/logout', (req, res)=>{
  req.logOut();
  return res.redirect('http://localhost:3000/auth/');
})

app.listen (port, () => { console.log(`Listening like a boss on ${port}`)});
