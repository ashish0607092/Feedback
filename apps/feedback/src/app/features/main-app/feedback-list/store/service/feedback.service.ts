import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { of, Observable } from 'rxjs';
import { FeedBackResponse } from '../model/feedback.response';
import { API_URL, Feedback } from '@feedback-workspace/api-interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  getAllFeedback(): Observable<FeedBackResponse> {
    return this.httpClient.get<FeedBackResponse>(API_URL.API_BASE_URL + API_URL.FEEDBACK);
  }
  createFeedback(payload: Feedback) {
    return this.httpClient.post(API_URL.API_BASE_URL + API_URL.FEEDBACK, payload, { observe: 'response' });
  }
  deleteFeedback(id: string) {
    return this.httpClient.delete(API_URL.API_BASE_URL + API_URL.FEEDBACK + '/' + id, { observe: 'response' });
  }
}
