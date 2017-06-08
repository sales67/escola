import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class addCentreService{
private addUrl = 'http://172.17.0.242:8080/centre/new';


constructor(private http: Http){}


addCentrePost(addid,addnom,addidlocalitat){     
        var creds = "id=" + addid + "&nom=" + addnom + "&localitat=" + addidlocalitat;

        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    }
}
