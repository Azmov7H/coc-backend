import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'premium', 'admin'],
    default: 'user'
  },
  interests: {
    type: [String], // مثال: ["Editing", "Podcast", "Nature"]
    default: []
  },
  contents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media'
  }]
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);
