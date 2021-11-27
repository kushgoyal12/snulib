const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');

const catchAsync = require('../utilities/catchAsync');
const Book = require("../models/book")


router.get('/searchBook' ,isLoggedIn, async(req , res)=>{
    
    const book_name = req.query.search 
    const books = await Book.find({"name" : book_name})
    if (books.length===0)
    {
        req.flash('error',"Book Not Found!!")
        res.redirect('/index')
    }
    else{
       res.render('books/material-cards',{ books });
    }
    })

router.get('/departments/:name' , isLoggedIn, catchAsync(async (req, res) => {
        const { name } = req.params;
        const books = await Book.find({ category: name });
        res.render('books/material-cards', { books });
    }))

router.get('/issuedbooks',async(req,res)=>{
        
    const user_name = req.user.username;   
    const books = await Book.find({'issued_by': {$regex : user_name}});
    if (books.length===0)
    {
        req.flash('error',"No Books Issued by you!!")
        res.redirect('/index')
    }
    else{
        res.render('books/material-cards',{ books});
    }
    })

router.get('/latest' ,isLoggedIn, async(req , res)=>{
    
        const book_name = req.query.search 
        const books = await Book.find({category: {$in: ['Art-Photography','Biography']}})
        res.render('books/material-cards',{ books });
        })    

        router.get('/new', isLoggedIn, (req, res) => {
        res.render('books/new');
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