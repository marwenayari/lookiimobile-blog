import { Comment } from '@articles/models/comment';

export class Article {
    id: string;
    createdAt: string;
    image: string;
    title: string;
    description: string;
    author: string;
    comments: Comment[]

    constructor(article?: Article) {
        this.id = article?.id || ""
        this.createdAt = article?.createdAt || "";
        this.image = article?.image || "";
        this.title = article?.title || "";
        this.description = article?.description || "";
        this.author = article?.author || "";
        this.comments = article?.comments || [];
    }
 }