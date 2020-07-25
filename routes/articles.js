const router = require('express').Router();
let Article = require('../models/article.model');

// retrieve articles route
router.route('/').get((req, res) => {
    // order by most recent
    Article.find().sort({createdAt: -1})
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error tryna fetch: '+err));
});

// retrive specific article using id
router.route('/:id').get((req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error tyrna fetch: '+err));
})

// retrieve articles by topic
router.route('/topic').get((req, res) => {
    Article.find({category: topic})
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error tryna fetch: '+error))
})

// post article route
router.route('/add').post((req, res) => {
    const author = req.body.author;
    const date = req.body.date;
    const title = req.body.title;
    const category = req.body.category;
    const brief = req.body.brief;
    const content = req.body.content;

    const newArticle = new Article({author, date, title, category, brief, content});

    newArticle.save()
        .then(() => console.log('Article successfully added'))
        .catch(err => res.status(400).json('Error while uploading article: '+err));
})

// delete article route
// router.route('/delete').
module.exports = router;