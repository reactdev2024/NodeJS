const mongoose = require('mongoose');

const connectDB = async () => {
    // MongoDB connection URL
    const dbURI = 'mongodb+srv://shaikhtausif71:tausif71@portfoliocluster.qnfrt.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioCluster'; // Replace with your MongoDB URI

    try {
        await mongoose.connect(dbURI); // Simplified connection
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;