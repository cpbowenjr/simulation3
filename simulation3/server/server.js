require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive');



const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())

app.use(passport.session())

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID:process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK_URL,
    scope: 'openid profile'
}),

passport.serializeUser((profile, done) => {
    return done(null, profile)
}),

passport.deserializeUser((profile, done) => {
    return done(null, profile);
}))

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}))

const {SERVER_PORT} = process.env
app.listen(SERVER_PORT, () => {
    console.log(`Congrats! You made it to port ${SERVER_PORT}, enjoy your day...`)
});