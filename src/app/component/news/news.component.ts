import { Component } from '@angular/core';
import { Article, ArticlesResponse } from 'src/app/model/news';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsItems: Article[] = [];
  pageSize: number = 5;
  currentPage: number = 1;
  apiError: string = "";

  constructor(
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.onGetNews();
  }


  onGetNews() {
    this._commonService.getNewsData(this.pageSize, this.currentPage).subscribe((res: ArticlesResponse) => {
      this.newsItems = res.articles;
      this.currentPage++;
      console.log(this.newsItems)
    }, (error) => {
      this.apiError = error.message;
      this.newsItems = [];
      this.currentPage = 1;
    })
  }


  onScroll() {
    console.log('scrolled!!');
    this.onGetNews()
  }
}
