import { Component } from '@angular/core';
import { Article, ArticlesResponse } from 'src/app/model/news';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.scss']
})
export class GeneralNewsComponent {
  newsItems: Article[] = [];
  apiError: string = "";
  isLoading: boolean = false;

  constructor(
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.onGetNews();
  }


  onGetNews() {
    this.isLoading = true;
    this._commonService.getNewsData().subscribe((res: ArticlesResponse) => {
      this.newsItems = res.articles;
      this.isLoading = false;
    }, (error) => {
      this.apiError = error.message;
      this.newsItems = [];
      this.isLoading = false;
    })
  }
}
