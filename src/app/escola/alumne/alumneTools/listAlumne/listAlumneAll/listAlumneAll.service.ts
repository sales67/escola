import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoginService} from '../../../../../login/login.service';



@Injectable()

export class ListAlumneAllService{
private listAlumne = 'http://172.17.0.98:8080/escola/listAlumne';
private listAlumneId = 'http://172.17.0.98:8080/escola/listAlumneId';


private headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + this.loginService.getToken()
     });
  constructor(
    private http: Http,
    private loginService: LoginService) {
  }

   getAlumnes() {        
      var a = this.http.get(this.listAlumne,{
          headers : this.headers
      })
                .map(res => res.json());        
      return a;
    } 
}

