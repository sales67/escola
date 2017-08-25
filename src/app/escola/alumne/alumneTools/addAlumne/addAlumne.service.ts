import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../../../login/login.service';


@Injectable()

export class AddAlumneService{
private addUrl = 'http://172.17.0.98:8080/escola/addAlumne?';

private headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + this.loginService.getToken()
     });
  constructor(
    private http: Http,
    private loginService: LoginService) {
  }

addAlumne(addid,addnom,addidcentre,addnomcentre){     
        var creds = "id=" + addid + "&nom=" + addnom + "&idEscola=" + addidcentre + "&nomEscola=" + addnomcentre;

        //  var headers = new Headers();
       // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post(this.addUrl,creds,{
            headers:this.headers
        })
           .map((response: Response ) => {})
        console.log(a);
    return a;
           
    }
}