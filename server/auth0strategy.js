const Auth0Strategy = require('passport-auth0');
const config = require('./config');
let app = require('./index');
// console.log('app', app);
module.exports = new Auth0Strategy({
  domain:       config.domain,
  clientID:     config.clientId,
  clientSecret: config.clientSecret,
  callbackURL:  config.callback,
  scope: 'openid email profile'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    const db = app.get('db');
    db.find_user([profile.identities[0].user_id])
    .then( user => {
      console.log('user strategy', user)
      if(user[0]) {
        return done(null, {id: user[0].id})
      } else {
        db.create_user([profile.identities[0].user_id])
        .then( user => {
          return done(null, {id: user[0].id})
        })
      }
    })
    // return done(null, profile);
  }
);
