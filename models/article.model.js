const mongoose = require('mongoose');

// The article schema. Later to add comments and the likes (not actual likes)
const articleSchema = new mongoose.Schema(
    {
        author: {type: String, required: true},
        date: {type: Date, required: true},
        title: {type: String, required: true},
        category: {type: String, required: true},
        brief: {type: String, required: true},
        content: {type: String, required: true}
        // image type
    },
    {
        timestamps: true
    });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;