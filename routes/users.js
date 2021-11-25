const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.post('/register', async (req, res, next) => {
    try {
    const { email, username, password, isAdmin } = req.body;
    const user = new User({ email, username, isAdmin });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
        if(err) return next(err);
        res.redirect('/books');
    })
    } catch(e) {
        res.redirect('/register');
    }
})

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'Welcome Back!');
    // const redirectUrl = req.session.returnTo || '/campgrounds';
    // delete req.session.returnTo;
    res.redirect('/index');
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Goodbye!');
    res.redirect('/login');
})

module.exports = router;

