const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true, // Ensure the field is mandatory
        trim: true, // Removes any leading or trailing whitespace
    },
    middlename: {
        type: String,
        trim: true, // Removes any leading or trailing whitespace
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures the email is unique in the collection
        lowercase: true, // Stores the email in lowercase
        trim: true,
        match: [ // Validates the email format
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
    },
}, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` timestamps
});
const User = mongoose.model('User', userSchema);
module.exports = User;
