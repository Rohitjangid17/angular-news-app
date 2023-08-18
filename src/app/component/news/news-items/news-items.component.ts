import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/news';

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent {
  @Input() newsItems: Article[] = []
}
