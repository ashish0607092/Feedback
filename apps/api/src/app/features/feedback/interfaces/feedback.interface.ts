
import { Document } from 'mongoose';

export interface Feedback extends Document {
  readonly feedback: string;
  readonly module: string;
}
