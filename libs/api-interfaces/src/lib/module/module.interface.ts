import { Document } from 'mongoose';

export interface Module extends Document {
  readonly name: string;
  readonly description: string;
  readonly colorCode?: number;
}
