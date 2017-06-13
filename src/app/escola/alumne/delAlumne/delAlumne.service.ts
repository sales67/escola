import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class DelAlumneService{
private delUrl = 'http://172.17.0.161:8080/escola/delCurs';

constructor(private http: Http){}


delAlumne(delid){     
    
 var crear = "?id=" + delid;
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ crear, {
           headers: headers
       })
           .map((response: Response) => {})
            
    }

}