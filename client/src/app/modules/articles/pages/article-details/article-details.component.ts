import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@articles/models/article';
import { ArticlesService } from '@articles/services/articles/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article = new Article();
  errorMessage: string = "";

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
			const id = params['id'];
			this.getArticle(id);
		});
  }

  getArticle(id: string): void {
    this.articlesService.getArticle(id).subscribe({
      next: (data) => { 
        this.article = new Article(data);
      },
      error: () => {
        this.article = new Article();
        this.errorMessage = "Unable to load the article";
        console.log(this.errorMessage);
      }
    })
  }

  sendComment(): void {
    // @todo add sending comment
  }
}