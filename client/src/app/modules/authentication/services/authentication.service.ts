import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, Observable, of, throwError } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  AUTH_API: string;
  private isAuthenticatedDispatcher: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.AUTH_API = `${environment.API_URL}/users`;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.AUTH_API)
      .pipe(switchMap(users => {
        const foundUser = users.find((u) => u.email == email && u.password == password);
        if (foundUser) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("uid", foundUser.id);
          this.emitIsAuthenticated(true);
          return of("success");
        }
        else {
          return throwError(() => "failure");
        }
      }));
  }

  logout(): Observable<any> {
    localStorage.clear();
    this.emitIsAuthenticated(false);
    return of("success");
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("isAuthenticated") === "true";
  }

  private emitIsAuthenticated(value: boolean): void {
    this.isAuthenticatedDispatcher.emit(value);
  }

  getIsAuthenticatedEmitter(): EventEmitter<boolean> {
    return this.isAuthenticatedDispatcher;
  }
}
