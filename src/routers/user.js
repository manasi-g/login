import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passport_local from 'passport-local';

const LocalStrategy = passport_local.Strategy();

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(authUser));

authUser = (user, password, done) => {
    //Search the user, password in the DB to authenticate the user
    //Let's assume that a search within your DB returned the username and password match for "Kyle".
    let authenticated_user = { id: 123, name: "Kyle" }
    return done(null, authenticated_user)
}

passport.serializeUser((userObj, done) => {
    done(null, userObj)
});

passport.deserializeUser((userObj, done) => {
    done(null, userObj)
});


const router = new express.Router();

router.get("/", (req, res) => {
    res.send("test")
})

export default router