const router = require('express').Router();
let Article = require('../models/article.model');

// set up routes
router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const author = req.body.author;
    const title = req.body.title;

    const newArticle = new Article({author, title});

    newArticle.save()
        .then(() => console.log('Article added'))
        .catch(err => res.status(400).json('Error: '+err));
})

module.exports = router;