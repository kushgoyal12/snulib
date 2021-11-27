const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const ExpressError = require('./utilities/ExpressError');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
 const { isLoggedIn } = require('./middleware');

const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

mongoose.connect('mongodb+srv://Zack:d9VzyAmXpdqa8IRZ@cluster0.bwzxy.mongodb.net/Library', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
    secret: 'okay',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    console.log(req.session)
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', userRoutes);
app.use('/books', bookRoutes);


app.get('/index', isLoggedIn, (req, res) => {
    res.render('index');
})


app.all('*', (req, res, next) => {
    next(new ExpressError('Page not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) {
        err.message = 'Something went wrong'; 
    }
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log('Serving on Port 3000')
})