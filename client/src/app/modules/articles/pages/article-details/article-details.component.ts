import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@articles/models/article';
import { User } from '@articles/models/user';
import { ArticlesService } from '@articles/services/articles/articles.service';
import { UsersService } from '@articles/services/users/users.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article = new Article();
  authorName: string = "";
  errorMessage: string = "";

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
			const id = params['id'];
			this.getArticle(id);
		});
  }

  getArticle(id: string): void {
    this.articlesService.getArticle(id).subscribe({
      next: (data: Article[]) => { 
        this.article = new Article(data[0]);
        this.getAuthorName();
      },
      error: () => {
        this.article = new Article();
        this.errorMessage = "Unable to load the article";
      }
    })
  }

  getAuthorName(): void {
    this.userService.getUserById(this.article.author).subscribe({
      next: (data: User[]) => { 
        this.authorName = data[0].displayName;
      },
      error: () => {
        this.article = new Article();
        this.errorMessage = "Unable to get the author display name";
      }
    })
  }

  sendComment(): void {
    // @todo add sending comment
  }
}