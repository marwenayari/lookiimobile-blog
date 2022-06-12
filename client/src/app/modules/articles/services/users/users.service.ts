import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User } from '@articles/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ENDPOINT: string;

  constructor(private http: HttpClient) {
    this.ENDPOINT = `${environment.API_URL}/users`;
  }

  getUserById(id: string): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.ENDPOINT}/${id}`)
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.ENDPOINT}`)
  }

}
