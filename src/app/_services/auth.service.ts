import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=e13cdab9a221830cad6d9aced7788e74'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;

  constructor(private http: HttpClient) {

   }


  login(username: string, password: string, token: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password,
      token
    }, httpOptions);
  }

  generateToken() {
    this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=e13cdab9a221830cad6d9aced7788e74').subscribe(data => {
      
      this.token = data;
      
      this.token = this.token.request_token;
      
      
    });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'users/', {
      username,
      email,
      password
    }, httpOptions);
  }
}
