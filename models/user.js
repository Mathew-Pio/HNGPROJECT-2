const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        minLength: 3,
        required: [true, 'Full name in required']
    },
    // {
    //     timestamps: true,
    //     toJSON: { virtuals: true }
    // }
})

module.exports = mongoose.model('User', userSchema);