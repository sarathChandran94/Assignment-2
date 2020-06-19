const express = require('express');
const loginRouter = express.Router();

let router = (nav) => {

    let info = [
        {
            label: 'Email',
            id: 'email',
            type: 'email'
        },
        {
            label: 'Password',
            id: 'pass',
            type: 'password'
        }
    ]

    loginRouter.get('/', (req, res) => {
        res.render('login',
            {
                nav,
                title: 'Library',
                info
            });
    });

    return loginRouter;
};

module.exports = router;
