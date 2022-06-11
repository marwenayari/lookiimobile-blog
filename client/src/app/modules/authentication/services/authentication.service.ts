import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  AUTH_API: string;
  private isAuthenticatedDispatcher: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.AUTH_API =  `${environment.API_URL}/users`;
  }

  login(username: string, password: string): Observable<any> {
    if (username == "user") {
      localStorage.setItem("isAuthenticated", "true");
      this.emitIsAuthenticated(true);
      return of("success");
    } else {
      return throwError(() => "failure");
    }
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
