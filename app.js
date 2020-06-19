const express = require('express');
const app = express();
const nav = [
    {
        link: '/books', name: 'Books'
    },
    {
        link: '/authors', name: 'Authors'
    },
    {
        link: '/addBooks', name: 'Add Books'
    },
    {
        link: '/login', name: 'Login'
    },
    {
        link: '/signup', name: 'Signup'
    }
];

const chalk = require('chalk');
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/addBooks', addBookRouter);
app.use('/signup', signupRouter);

app.get('/',(req,res) => {
    res.render('index',
    {
        nav,
        title:'Library'
    });
});



const port = process.env.PORT || 9000
app.listen(port, () => console.log(chalk.redBright(`listening on port:${port}...`)));
