import {Injectable}  from '@angular/core';
import {Http,URLSearchParams,Response}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../../../login/login.service';

@Injectable()

export class UpdateAlumneService{
private updateUrl = 'http://172.17.0.98:8080/escola/updateAlumne?';

private headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + this.loginService.getToken()
     });
  constructor(
    private http: Http,
    private loginService: LoginService) {
  }

updateAlumne(id,camp,resposta){     
   
    var creds = "id=" + id + "&camp=" + camp + "&resposta=" + resposta;

    return this.http.put(this.updateUrl+creds,{
        headers : this.headers
    })    
    .map((response: Response) => {})
           
    }

}