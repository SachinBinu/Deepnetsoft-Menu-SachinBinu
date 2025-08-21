const mongoose = require('mongoose');
const ItemModel = new mongoose.Schema({
    FoodName: { type: String, require: true },
    Description: { type: String, require: true },
    Price: { type: Number, require: true },
    Type: { type: String, require: true },

})
const Item = mongoose.model("NewItem", ItemModel);
module.exports = Item