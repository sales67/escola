
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HomeService {

    public token: string;


    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    private authUrl = 'http://localhost:8080/auth';
    private headers = new Headers({'Content-Type': 'application/json'});    

    login(username: string, password: string): Observable<boolean>{
        
        let creds = JSON.stringify({'username':username, 'password':password});
        
        
       // headers.append('Content-Type', 'application/x-www-form-urlencoded');         
        let options = new RequestOptions({headers: this.headers});

        return this.http.post(this.authUrl,creds,options)
            .map((response: Response) => { 
                // login successful if there's a jwt token in the response        
                let token = response.json().data && response.json().token;
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
            //console.log(a);
            //return a;
    }



    /*getToken(): String {

   /* getToken(): String {

      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }*/

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
