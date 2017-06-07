import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class delCentreService{
private delUrl = 'http://172.17.0.242:8080/centre/remove';

constructor(private http: Http){}


delCentre(deleteId){     
    
 var crear = "?id=" + deleteId;
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ crear, {
           headers: headers
       })
           .map((response: Response) => {})
            
    }

}