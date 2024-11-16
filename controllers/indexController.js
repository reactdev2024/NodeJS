exports.userList = (req, res, next) => {
    const usersList = [{
        name: 'Tausif Shaikh',
        gender: 'Male',
        email: 'shaikhtausif71@gmail.com'
    }];
    res.render('index.ejs', { user: usersList });
}