const passport = require('passport')

function initUser(app) {
    app.get('/', renderWelcome);
    app.get('/profile', passport.authenticationMiddleware(), renderProfile);
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));
    app.post('/success', passport.authenticate('local', {
        successRedirect: '/success1',
        failureRedirect: '/chen'
    }));
}

function renderWelcome(req, res) {
    res.render('user/welcome')
}

function renderProfile(req, res) {
    res.render('user/profile', {
        username: "a"
    })
}

module.exports = initUser;