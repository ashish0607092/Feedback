import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_URL, Module } from '@feedback-workspace/api-interfaces';
import { ModuleResponse } from '../model/module.response';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private httpClient: HttpClient) { }

  getAllModule(): Observable<ModuleResponse> {
    return this.httpClient.get<ModuleResponse>(API_URL.API_BASE_URL + API_URL.MODULE);
  }
  createModule(payload: Module) {
    return this.httpClient.post(API_URL.API_BASE_URL + API_URL.MODULE, payload, { observe: 'response' });
  }
  deleteModule(id: string) {
    return this.httpClient.delete(API_URL.API_BASE_URL + API_URL.MODULE + '/' + id, { observe: 'response' });
  }
}
