import mongoose from 'mongoose';

const aiContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'audio'],
    required: true
  },
  topic: {
    type: String,
    enum: [
      'religion', 'education', 'sports', 'cooking', 'technology',
      'tourism', 'health', 'entertainment', 'news', 'culture'
    ],
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed, // يمكن أن يكون نص أو رابط ملف
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// حذف تلقائي عند انتهاء الصلاحية
aiContentSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model('AIContent', aiContentSchema);
