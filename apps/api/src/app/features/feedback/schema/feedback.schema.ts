import * as mongoose from 'mongoose';

export const FeedBackSchema = new mongoose.Schema({
  feedback: String,
  module: String,
});
