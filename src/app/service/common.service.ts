import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesResponse } from '../model/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiKey: string = 'a5367a3977184e6c8acd72cc1d15c8bb';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getNewsData(): Observable<ArticlesResponse> {
    // return this._httpClient.get<ArticlesResponse>(`https://newsapi.org/v2/everything?q=apple&from=2023-08-15&to=2023-08-15&sortBy=popularity&apiKey=a5367a3977184e6c8acd72cc1d15c8bb&page=${pageSize}&count=${currentPage}`);
    // return this._httpClient.get<ArticlesResponse>(`https://newsapi.org/v2/everything?q=tesla&from=2023-07-16&sortBy=publishedAt&apiKey=${this.apiKey}&page=${currentPage}&count=${pageSize}`);
    // return this._httpClient.get<ArticlesResponse>(`https://newsapi.org/v2/everything?q=sports&apiKey=${this.apiKey}`);
    return this._httpClient.get<ArticlesResponse>(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a5367a3977184e6c8acd72cc1d15c8bb`)
  }
}
