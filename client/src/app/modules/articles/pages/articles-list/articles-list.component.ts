import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@articles/models/article';
import { ArticlesService } from '@articles/services/articles/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];
  errorMessage: string = "";

  constructor(
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.loadArticles()
  }

  loadArticles(): void {
    this.errorMessage = "";
    this.articlesService.getArticles().subscribe({
      next: (data) => { 
        this.articles = data;
      },
      error: () => {
        this.articles = [];
        this.errorMessage = "Unable to load articles";
      }
    })
  }

  showAuthors(): void {
    //@ show authors in modal
  }

  showDetails(id: string): void {
    this.router.navigate([`articles/${id}`])
  }

}
