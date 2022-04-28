const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

// Router
const postsRouter = require('./routes/posts');
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

require('./connections')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', postsRouter);
// app.use('/users', usersRouter);

module.exports = app;