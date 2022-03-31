const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String },
    instructions: { type: String }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;