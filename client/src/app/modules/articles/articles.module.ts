import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';


@NgModule({
  declarations: [
    ArticlesListComponent,
    AddArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
