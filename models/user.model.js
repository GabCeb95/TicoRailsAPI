/*
* User Model
*/

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({ //Missing data schema
    user: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String }
}, { collection: 'user' });

var User = mongoose.model('User', userSchema);

module.exports = User;