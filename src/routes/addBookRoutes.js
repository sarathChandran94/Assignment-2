const express = require('express');
const addBookRouter = express.Router();

let router = (nav) => {

    let info = [
        {
            label: 'Book name',
            id: 'book',
            type: 'text'
        },
        {
            label: 'Author name',
            id: 'auth',
            type: 'text'
        },
        {
            label: 'Genre',
            id: 'gen',
            type: 'text'
        },
        {
            label: 'Image',
            id: 'pic',
            type: 'file'
        }
    ]

    addBookRouter.get('/', (req, res) => {
        res.render('addBooks',
            {
                nav,
                title: 'Library',
                info
            });
    });

    return addBookRouter;
};

module.exports = router;
