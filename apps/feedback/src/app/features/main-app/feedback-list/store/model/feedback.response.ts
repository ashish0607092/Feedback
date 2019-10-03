import { GenericResponse, Feedback } from '@feedback-workspace/api-interfaces';

export interface FeedBackResponse extends GenericResponse {
  data: Array<Feedback>
}
