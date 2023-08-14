import { Component } from '@angular/core';
import { Article, ArticlesResponse } from 'src/app/model/news';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsItems: Article[] = []

  constructor(
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
    this._commonService.getNewsData().subscribe((res: ArticlesResponse) => {
      this.newsItems = res.articles;
      console.log(this.newsItems)
    })
  }
}
