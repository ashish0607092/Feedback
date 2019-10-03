import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { of, Observable } from 'rxjs';
import { FeedBackResponse } from '../model/feedback.response';
import { API_URL } from '@feedback-workspace/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  getAllFeedback(): Observable<FeedBackResponse> {
    return this.httpClient.get<FeedBackResponse>(API_URL.API_BASE_URL + API_URL.GET_ALL_FEEDBACK);
  }
}
