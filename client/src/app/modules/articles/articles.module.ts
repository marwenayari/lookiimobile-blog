import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    ArticlesListComponent,
    AddArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DialogModule
  ]
})
export class ArticlesModule { }
