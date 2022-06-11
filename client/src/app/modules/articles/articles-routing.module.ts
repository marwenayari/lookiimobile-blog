import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from '@articles/pages/articles-list/articles-list.component';
import { ArticleDetailsComponent } from '@articles/pages/article-details/article-details.component';
import { AddArticleComponent } from '@articles/pages/add-article/add-article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponent
  },
  {
    path: 'add',
    component: AddArticleComponent
  },
  {
    path: ':id',
    component: ArticleDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/articles'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
