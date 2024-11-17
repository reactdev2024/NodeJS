const express = require('express'); //import express package to use express feature
const connectDB = require('./util/dbConnection');
const indexRouter = require('./routes/IndexRoute'); //import index router in app.js file

const app = express();  // in app variable we store reference of expresss package

app.set('view engine', 'ejs'); //register template engine
app.set('views', 'views');     // also inform express our views default folder is views

app.use(indexRouter); // register index router
connectDB();

const PORT = process.env.PORT || 3000;
// app.listen, that starts your server and tells it to "listen" for requests on a specific port (like a door where requests come in).
app.listen(PORT, () => {
    console.log(`server is running on port number ${PORT}`);
});