const express = require('express');
const booksRouter = express.Router();

let router = (nav) => {
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: 't&j.jpg'
        },
        {
            title: 'Harry Potter',
            author: 'JK Rowling',
            genre: 'Fantasy',
            img: 'hp.jpg'
        },
        {
            title: 'Pathummayude Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: 'aadu.jpg'
        }
    ]

    booksRouter.get('/',(req,res) => {
        res.render('books',
        {
            nav,
            title:'Library',
            books
        });
    });

    booksRouter.get('/:id',(req,res) => {
        const id = req.params.id;
        res.render('book',
        {
            nav,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;

};


module.exports = router;
