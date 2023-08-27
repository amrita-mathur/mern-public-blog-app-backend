const mongoose = require('mongoose');

// Category Schema
const CategorySchema = mongoose.Schema({
    title: String
})

// Category model
const Category = mongoose.model('Category', CategorySchema);


module.exports = Category;