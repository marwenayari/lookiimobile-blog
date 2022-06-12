import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@articles/models/article';
import { User } from '@articles/models/user';
import { ArticlesService } from '@articles/services/articles/articles.service';
import { UsersService } from '@articles/services/users/users.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];
  authors: User[] = [];
  errorMessage: string = "";
  showAuthorsModal: boolean = false;

  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.loadArticles()
  }

  loadArticles(): void {
    this.errorMessage = "";
    this.loadResources().subscribe({
      next: (data: any) => { 
        data.getArticles.map((a: Article) => {
          a.author = data.getUsers.find((u: User) => u.id == a.author).displayName;
        });
        this.articles = data.getArticles;
        this.authors = data.getUsers;
      },
      error: (e) => {
        this.articles = [];
        this.errorMessage = "Unable to load articles";
      }
    })
  };

  loadResources(): Observable<any> {
    const calls: {
      getArticles?: Observable<Article[]>,
      getUsers?: Observable<User[]>
    } = {};

    calls.getArticles = this.articlesService.getArticles();
    calls.getUsers = this.usersService.getUsers();

    return forkJoin(calls)
  };
  

  showAuthors(): void {
    this.showAuthorsModal = true;
  }

  showDetails(id: string): void {
    this.router.navigate([`articles/${id}`])
  }

}
