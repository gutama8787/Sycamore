import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'
import crypto from 'crypto';

const UserSchema = mongoose.Schema({
    userName: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    bio: String,
    // salt: String,
    // hash: String
    password: String,

},{timestamps: true})

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});


// UserSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };


// UserSchema.methods.validPassword = function(password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.hash === hash;
// };

// https://thinkster.io/tutorials/node-json-api/creating-the-user-model

let User = mongoose.model('User',UserSchema);


export default User