const { Schema } = require('mongoose');

const recipeSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String },
    instructions: { type: String },
    recipeId: { type: String, required: true }
});


module.exports = recipeSchema;