const mongoose = require('mongoose');

// Todo Schema
const ArticleSchema = mongoose.Schema({
    title: String,
    category: String,
    userId: String,
    content: String,
    image: String
})

// Todo model
const Article = mongoose.model('Article', ArticleSchema);


module.exports = Article;