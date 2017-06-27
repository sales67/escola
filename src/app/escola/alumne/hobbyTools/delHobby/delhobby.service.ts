import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class DelHobbyService{
private delUrl = 'http://172.17.0.98:8080/escola/delAlumne';

constructor(private http: Http){}


delHobby(delid){     
    
 var crear = "?id=" + delid;
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ crear, {
           headers: headers
       })
           .map((response: Response) => {})
            
    }
}