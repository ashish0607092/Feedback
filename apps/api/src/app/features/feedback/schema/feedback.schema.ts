import * as mongoose from 'mongoose';

export const FeedBackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: true,
  },
  module: String,
  moduleColor: String,
  timeStamp: {
    type: Number,
    required: true,
  },
});
