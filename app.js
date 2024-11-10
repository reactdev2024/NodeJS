const express = require('express'); //import express package to use express feature

const indexRouter = require('./routes/IndexRoute'); //import index router in app.js file

const app = express();  // in app variable we store reference of expresss package

app.use(indexRouter); // register index router

// app.listen, that starts your server and tells it to "listen" for requests on a specific port (like a door where requests come in).
app.listen(3000, () => {
    console.log(`server is running on port number 3000`);
});