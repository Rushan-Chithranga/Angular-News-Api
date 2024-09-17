import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopnewsapiService {
  constructor(private _http: HttpClient) {}

  topHeadlinesNewsUrl =
    '/newsapi/v2/top-headlines?country=us&apiKey=7e9e34c530c440bf9dec9b98cf53cc60';

  tcHeadLines(): Observable<any> {
    return this._http.get(this.topHeadlinesNewsUrl);
  }
}
