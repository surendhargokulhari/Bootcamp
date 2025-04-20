const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });


userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
   
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});


userSchema.post('save', function(doc, next) {
  console.log(`New user created: ${doc.name} with email: ${doc.email}`);
  next();
});


userSchema.pre('find', function(next) {
  this.where({ isActive: true });
  next();
});


userSchema.methods.generateProfile = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
  };
};

userSchema.statics.findByEmailDomain = function(domain) {
  return this.find({ email: { $regex: `@${domain}$` } });
};


const User = mongoose.model('User', userSchema);

module.exports = User;
