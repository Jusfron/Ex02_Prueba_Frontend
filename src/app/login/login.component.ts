import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string = "";
  token: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private http: HttpClient) { }

  ngOnInit(): void {
    if ( this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().roles;


      this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=e13cdab9a221830cad6d9aced7788e74').subscribe(data => {
        this.token = data;
        console.log(this.token);
        this.token = this.token.request_token;
        console.log(this.token);
      });
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    console.log(this.token);

    this.authService.login(username, password, this.token).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
