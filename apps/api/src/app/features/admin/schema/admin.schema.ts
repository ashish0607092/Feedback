import * as mongoose from 'mongoose';

export const ModuleSchema = new mongoose.Schema({
  name: String,
  desc: String,
  colorCode: String,
  slug: String,
});
