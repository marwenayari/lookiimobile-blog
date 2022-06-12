import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Article } from '@articles/models/article';
 
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  ENDPOINT: string;

  constructor(private http: HttpClient) {
    this.ENDPOINT =  `${environment.API_URL}/articles`;
  }

  getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(this.ENDPOINT)
      .pipe(
        map((articles: Article[]) => this.orderByCreationDateDescendant(articles))
      )
  }

  private orderByCreationDateDescendant(articles: Article[]): Article[] {
    return articles.sort((articleA: Article, articleB: Article) => articleB.createdAt.localeCompare(articleA.createdAt));
  }

  getArticle(id: string): Observable<Article[]> {
    return this.http
      .get<Article[]>(`${this.ENDPOINT}/${id}`)
  }

  addArticle(data: any): Observable<Article> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Article>(
        this.ENDPOINT,
        JSON.stringify(data),
        httpOptions
      )
  }
}
