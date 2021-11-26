const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');

const catchAsync = require('../utilities/catchAsync');
const Book = require("../models/book")


router.get('/medical' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Medical' });
    res.render('books/medicalDept', { books });
}))

router.get('/scigeo' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Science-Geography' });
    res.render('books/scigeoDept', { books });
}))

router.get('/artphoto' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Art-Photography' });
    res.render('books/artDept', { books });
}))

router.get('/biography' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Biography' });
    res.render('books/biographyDept', { books });
}))

router.get('/bfl' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Business-Finance-Law' });
    res.render('books/bflDept', { books });
}))

router.get('/childrenBooks' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Childrens-Books' });
    res.render('books/childrenBooksDept', { books });
}))

router.get('/computing' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Computing' });
    res.render('books/computingDept', { books });
}))

router.get('/crimeThriller' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Crime-Thriller' });
    res.render('books/crimeThrillerDept', { books });
}))

router.get('/health' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Health' });
    res.render('books/healthDept', { books });
}))

router.get('/naturalHistory' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Natural-History' });
    res.render('books/naturalHistoryDept', { books });
}))

router.get('/poetryDrama' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Poetry-Drama' });
    res.render('books/poetryDramaDept', { books });
}))

router.get('/romance' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Romance' });
    res.render('books/romanceDept', { books });
}))

router.get('/sport' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Sport' });
    res.render('books/sportDept', { books });
}))

router.get('/techEngg' , isLoggedIn, catchAsync(async (req, res) => {
    const books = await Book.find({ category: 'Technology-Engineering' });
    res.render('books/techEnggDept', { books });
}))

router.get('/searchBook' ,isLoggedIn, async(req , res)=>{
    
    const book_name = req.query.search 
    const book = await Book.findOne({"name" : book_name})
    res.render('books/show',{ book });
    })

router.get('/issuedbooks',async(req,res)=>{
        
    const user_name = req.user.username;   
    const book = await Book.findOne({'issued_by': {$regex : user_name}});
    if (book === null)
    {
        req.flash('error',"No Books Issued by you ")
        res.redirect('/index')
    }
    else{
        res.render('books/show',{ book});
    }
    })

router.get('/new', isLoggedIn, (req, res) => {
    res.render('books/new');
})

router.post('/', isLoggedIn, catchAsync(async(req, res) => {
    const book = new Book(req.body.book);
    await book.save();
    res.redirect('/index');
}))

router.get('/:id', catchAsync(async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { book });

}))

router.get('/:id/edit', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    // if(!campground) {
    //     req.flash('error', 'Cannot find that campground!');
    //     return res.redirect('/campgrounds');
    // }
    res.render('books/edit', { book })
}))

router.put('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, { ...req.body.book })
    // req.flash('success', 'Successfully updated campground!');
    res.redirect(`/books/${book._id}`)
}))

router.delete('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id)
    // req.flash('success', 'Successfully deleted campground!');
    res.redirect('/books');
}))



module.exports = router;