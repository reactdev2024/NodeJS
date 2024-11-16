const express = require('express'); // import express

const router = express.Router(); //  use for manage route & create routes

// this will create get route for /index
// router have http method like get,post,put & delete
// this will accept route name & callback function with request, response & next parameter
// we can get paramter name & body or header using req object
// we can send response using res object like json or web pages
router.get('/index', (req, res, next) => {
    // res.send('<h1>Hello World..!');
    res.render('index.ejs');
});

module.exports = router;