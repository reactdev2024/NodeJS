const User = require('../model/UserModel');

// Create New Users
exports.CreateUser = async (req, res, next) => {
    /* we can only get body if we set app.use(express().json()) 
    or
    if we install 'npm i body-parser' in application and set in app.js

        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))

        // parse application/json
        app.use(bodyParser.json())
    */
    const { firstname, middlename, lastname, email } = req.body;
    const user = new User({ firstname, middlename, lastname, email });
    await user.save().then((result) => {
        res.status(201).json({ status: 'created' });
    }).catch((err) => console.log(err));
}

// Get User By ID
exports.GetUserByID = async (req, res, next) => {
    const id = req.params.id; // get id query string params from URL
    const user = await User.findById(id);

    if (user) {
        res.render('./user.ejs', { user });
        // res.status(200).json({ status: 'success', user });
    } else {
        res.status(404).json({ status: 'fail', user: null });
    }
}

// Get All Users
exports.GetAllUsers = async (req, res, next) => {
    const users = await User.find({}); // get all users
    if (users) {
        res.status(200).json({ status: 'success', users });
    } else {
        res.status(404).json({ status: 'fail', users: null });
    }
}

// Update User By ID
exports.UpdateUserByID = async (req, res, next) => {
    const id = req.params.id;
    try {
        // Options
        //new:true return update record
        // runValidators: run validation on update
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (updatedUser) {
            res.status(200).json({ status: 'success', updatedUser });
        } else {
            console.log('User not found');
        }
    } catch (err) {
        res.status(404).json({ status: 'fail', users: null, error: `user not found for id ${id}` });
    }
}

// Delete User By ID
exports.DeleteUserByID = async (req, res, next) => {
    const id = req.params.id;
    const users = await User.findByIdAndDelete(id);
    if (users) {
        res.status(200).json({ status: 'success', users });
    } else {
        res.status(404).json({ status: 'fail', users: null, error: `user not found for id ${id}` });
    }
}