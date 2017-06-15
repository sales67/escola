import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AddHobbyService{
private addUrl = 'http://172.17.0.98:8080/escola/addAlumne?';


constructor(private http: Http){}


addHobby(addid,addnom,addidcentre,addnomcentre){     
        var creds = "id=" + addid + "&nom=" + addnom + "&idEscola=" + addidcentre + "&nomEscola=" + addnomcentre;

        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
        console.log(a);
    return a;
           
    }
}
