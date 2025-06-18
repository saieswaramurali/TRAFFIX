import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Admin Name is required'],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'Admin Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Admin Password is required'],
    minLength: 6,
    select: false,

  }
}, { timestamps: true });

adminSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.password;
    return ret;
  },
});


const Admin = mongoose.model('User', adminSchema);

export default Admin;
