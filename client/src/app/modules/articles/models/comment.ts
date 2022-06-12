export class Comment {
    id: string;
    createdAt: string;
    description: string;
    author: string;
    authorName: string;

    constructor(comment?: Comment) {
        this.id = comment?.id || ""
        this.createdAt = comment?.createdAt || "";
        this.description = comment?.description || "";
        this.author = comment?.author || "";
        this.authorName = comment?.authorName || "";
    }
 }