const mongoose = require('mongoose');

const { Schema } = mongoose;
const bycrypt = require('bycrpt');

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bycrypt.hash(this.password, saltRounds);
    }

    next();
})

userSchema.methods.isCorrectPassword = async function(password) {
    return await bycrypt.compare(password, this.password);
}


const User = mongoose.model('User', userSchema);

module.exports = User;