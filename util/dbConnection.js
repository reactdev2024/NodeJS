const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // import .env file to Use environment variable

const connectDB = async () => {
    // MongoDB connection URL
    //const dbURI = 'mongodb+srv://shaikhtausif71:tausif71@portfoliocluster.qnfrt.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioCluster'; // Replace with your MongoDB URI
    const dbURI = process.env.MONGODB_URI; // Use the MongoDB URI from the .env file

    try {
        await mongoose.connect(dbURI); // Use to connect monogoDB with URI
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
