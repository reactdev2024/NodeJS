const express = require('express'); //import express package to use express feature
const connectDB = require('./util/dbConnection');
const indexRouter = require('./routes/IndexRoute'); //import index router in app.js file
const userRouter = require('./routes/userRoute'); //import index router in app.js file
const session = require('express-session');  // import express-session to use session
const MongoDBStore = require('connect-mongodb-session')(session); // mongodb session
const dotenv = require('dotenv');
dotenv.config(); // import .env file to Use environment variable

const app = express();  // in app variable we store reference of expresss package
app.use(express.json());
app.set('view engine', 'ejs'); //register template engine
app.set('views', 'views');     // also inform express our views default folder is views

// Create a new session store
const store = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions', // The collection to store sessions in
});

// session added in middleware to use in application
// Set up session middleware
app.use(
    session({
        secret: 'your-secret-key', // Secret to sign the session ID
        resave: false, // Don't save session if unmodified
        saveUninitialized: true, // Save session if it's new
        store: store, // Use MongoDB session store
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
        },
    })
);



app.use(indexRouter); // register index router
app.use(userRouter); // register index router
connectDB(); // this function is use to connecting database

const PORT = process.env.PORT_NO || 3000;
// app.listen, that starts your server and tells it to "listen" for requests on a specific port (like a door where requests come in).
app.listen(PORT, () => {
    console.log(`server is running on port number ${PORT}`);
});