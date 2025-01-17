import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { switchMap, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(
    private _authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    });
  }

  sendlogin(): void {
    const { email, password } = this.formLogin.value;

    this._authService.sendCredentials(email, password).subscribe(
      (responseOk) => {
        console.log('sesion iniciada correctamente', responseOk);
        const { tokenSession, data } = responseOk;
        this.cookie.set('token', tokenSession, 4, '/');
        this.router.navigate(['/', 'tracks']);
      },
      (err) => {
        console.log('error con tu password', err);
        this.errorSession = true;
      }
    );
  }

  public enterWithoutLogin() {
    const email = 'test@test.com';
    const password = '12345678';
    this._authService.sendCredentials(email, password).subscribe(
      (responseOk) => {
        console.log('sesion iniciada correctamente', responseOk);
        const { tokenSession, data } = responseOk;
        this.cookie.set('token', tokenSession, 4, '/');
        this.router.navigate(['/', 'tracks']);
      },
      (err) => {
        console.log('error con tu password', err);
        this.errorSession = true;
      }
    );
  }
}
