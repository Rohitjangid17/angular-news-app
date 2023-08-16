import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesResponse } from '../model/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  getNewsData(): Observable<ArticlesResponse> {
    return this._httpClient.get<ArticlesResponse>("https://newsapi.org/v2/everything?q=apple&from=2023-08-15&to=2023-08-15&sortBy=popularity&apiKey=a5367a3977184e6c8acd72cc1d15c8bb");
  }
}
