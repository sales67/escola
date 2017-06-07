import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AddMarcaService{
private addUrl = 'http://172.17.0.98:8080/cotxe/addMarca';


constructor(private http: Http){}


addMarcaPost(addName,addTel,addCountry,addMail){     
        var creds = "nom=" + addName + "&telefon=" + addTel + "&pais=" + addCountry + "&correu=" + addMail;

        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    }
}
