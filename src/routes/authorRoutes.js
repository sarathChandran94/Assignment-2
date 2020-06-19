const express = require('express');
const authorsRouter = express.Router();

let router = (nav) => {
    var authors = [
        {
            title: 'Joseph Barbera',
            author: 'Tom and Jerry',
            genre: 'Cartoon',
            img: 'joseph-barbera.jpg'
        },
        {
            title: 'JK Rowling',
            author: 'Harry Potter',
            genre: 'Fantasy',
            img: 'jk-rowling.jpg'
        },
        {
            title: 'Basheer',
            author: 'Pathummayude Aadu',
            genre: 'Drama',
            img: 'basheer.jpg'
        }
    ]

    authorsRouter.get('/',(req,res) => {
        res.render('authors',
        {
            nav,
            title:'Library',
            authors
        });
    });

    authorsRouter.get('/:id',(req,res) => {
        const id = req.params.id;
        res.render('author',
        {
            nav,
            title:'Library',
            author: authors[id]
        });
    });

    return authorsRouter;

};


module.exports = router;
