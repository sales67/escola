import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../../../login/login.service';

@Injectable()

export class DelAlumneService{
private delUrl = 'http://172.17.0.98:8080/escola/delAlumne';

private headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + this.loginService.getToken()
     });
  constructor(
    private http: Http,
    private loginService: LoginService) {
  }


delAlumne(delid){     
    
 var crear = "?id=" + delid;
       return this.http.delete(this.delUrl+ crear, {
           headers: this.headers
       })
           .map((response: Response) => {})
            
    }

}