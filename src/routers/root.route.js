'use strict';
const express = require('express');
const router = express.Router();

const movieRouter = require('./movie.route');
const userRouter = require('./user.route');
const roomRouter = require('./room.route');


router.get('/', (req, res) => {
    console.log(req.headers);
    res.send('Hello World!');
    });

router.use('/movies', movieRouter);

router.use('/users', userRouter);

router.use('/rooms', roomRouter);

module.exports = router;