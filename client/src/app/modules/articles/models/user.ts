export class User {
    id: string;
    email: string;
    password: string;
    displayName: string;

    constructor(user?: User) {
        this.id = user?.id || ""
        this.email = user?.email || "";
        this.password = user?.password || "";
        this.displayName = user?.displayName || "";
    }
 }