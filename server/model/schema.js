const mongoose = require('mongoose');

// Quiz Collection
const QuizSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    createdAt: { type: Date, default: Date.now },
  });
  
  // Question Collection
  const QuestionSchema = new Schema({
    quiz: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
    text: { type: String, required: true },
    options: [{ type: String }],
    correctOptionIndex: { type: Number, required: true },
  });
  
  // User Collection
  const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quizzesTaken: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
  });
  
  // Result Collection
  const ResultSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quiz: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
    score: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  const User = mongoose.model('USER', UserSchema);
  module.exports = User;
