const mongoose = require('mongoose');
//Create a person 

const PersonSchema  = mongoose.Schema({
    name : { type: String, required: true },
    age : Number,
    favoriteFoods : [String]
});

module.exports = Person = mongoose.model('Person', PersonSchema);
