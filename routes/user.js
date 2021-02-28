const router = require('express').Router();
let User = require('../models/user.model');

// add admin
router.route('/add').post((req, res) => {
    const user = new User(req.body);

    console.log(`Testing user: ${user}`);

    user.save()
        .then(console.log('Admin succesfully added.'))
        .then(() => {
            return conn.close();
        })
        .catch(err => res.status(400).json("Error tryna save admin") + err);
})

// retrieve admin
router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error tryna get admin") + err);
})

module.exports = router;