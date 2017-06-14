import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AddCursService{
private addUrl = 'http://172.17.0.161:8080/escola/addCurs';


constructor(private http: Http){}


addCursPost(addid,addnom,addidcentre,addnomcentre){    
    
        var creds = "id=" + addid + "&nom=" + addnom + "&idcentre=" + addidcentre + "&nomcentre=" + addnomcentre;

    console.log(creds);
        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    }
}
