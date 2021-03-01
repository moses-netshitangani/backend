const router = require('express').Router();
let User = require('../models/user.model');

// add admin
router.route('/add').post((req, res) => {
    const user = new User(req.body);

    user.save()
        .then(user => res.json(user))
        .then(console.log('Admin succesfully added.'))
        .catch(err => res.status(400).json("Error tryna save admin") + err);
})

// retrieve admin
router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error tryna get admin") + err);
})

module.exports = router;