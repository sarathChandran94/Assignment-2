const express = require('express');
const signupRouter = express.Router();

let router = (nav) => {
    let info = [
        {
            label: 'Username',
            id: 'uName',
            type: 'text'
        },
        {
            label: 'Email',
            id: 'email',
            type: 'email'
        },
        {
            label: 'Phone Number',
            id: 'phone',
            type: 'tel'
        },
        {
            label: 'Password',
            id: 'pass',
            type: 'password'
        },
        {
            label: 'Confirm Password',
            id: 'pass2',
            type: 'password'
        }
    ]

    signupRouter.get('/', (req, res) => {
        res.render('signup',
            {
                nav,
                title: 'Library',
                info
            }
        );
    });
    return signupRouter;
}

module.exports = router;
