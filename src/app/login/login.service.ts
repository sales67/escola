import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

   public token: string;

   constructor(private http: Http) {
       var currentUser = JSON.parse(localStorage.getItem('currentUser'));
       this.token = currentUser && currentUser.token;
   }

   private headers = new Headers({'Content-Type':'application/json'});
   private authUrl = 'http://localhost:8080/auth';
   
   login(username: string, password: string): Observable<boolean> {
       let body:any = { "username": username, "password": password };
       console.log(password);
       return this.http.post(this.authUrl,body, {headers: this.headers})
           .map((response: Response) => {
               // login successful if there's a jwt token in the response
               let token = response.json() && response.json().token;
               if (token) {
                   // store username and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                   // return true to indicate successful login
                   return true;
               } else {
                   // return false to indicate failed login
                   return false;
               }
           }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
   getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}