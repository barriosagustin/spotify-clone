import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private URL = environment.api;

  constructor(private http:HttpClient, private cookie:CookieService) { }

  sendCredentials(email: string, password: string): Observable<any>{

    const body = {
      email,
      password
    }
    console.log(email,password)
    return this.http.post(`${this.URL}/auth/login`,body)
    // .pipe(
    //   tap((responseOk:any) => {
    //     const {tokenSession,data} = responseOk;
    //     this.cookie.set('token',tokenSession,4,'/')
  
    //   })
    // )
  }
}
