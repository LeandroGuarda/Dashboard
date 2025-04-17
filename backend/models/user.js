const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, 'Name is required']
    },
    lastName:{
        type: String,
        required:[true, 'Name is required']
    },
    email:{
        type: String,
        required:[true, 'Email is required'],
    },
    password:{
        type: String,
        required:[true, 'Password is required'],
    }
})


userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log("Password hasheada:", this.password);
        
        next();
    } catch (error) {
        next(error);
    }
    console.log(password)
})


const User = mongoose.model('User', userSchema);

module.exports = User;