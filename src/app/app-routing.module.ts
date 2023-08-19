import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralNewsComponent } from './component/news/general-news.component';

const routes: Routes = [
  {
    path: "", component: GeneralNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
