import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@articles/models/article';
import { ArticlesService } from '@articles/services/articles/articles.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
  title!: string;
  description!: string;

  constructor(
    private articlesService: ArticlesService,
    private messageService: MessageService,
    private router: Router
  ) { }

  addArticle() {
    const article = new Article({
      id: "",
      createdAt: (new Date()).getTime().toString(),
      image: "https://miro.medium.com/max/1400/1*shLaDTi2v-4untYYBrawaw.png",
      title: this.title,
      description: this.description,
      author: localStorage.getItem("uid") as string,
      comments: []
    })
    this.articlesService.addArticle(article).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Article Added Successfully' });
        this.router.navigate(['/']);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Article could not be added! try again' });
      }
    })
  }

}
