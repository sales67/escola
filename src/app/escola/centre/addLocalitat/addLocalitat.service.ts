import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class addLocalitatService{
private addUrl = 'http://172.17.0.242:8080/centre/newLocalitat';


constructor(private http: Http){}


addLocalitatPost(addid,addlocalitat){     
        var creds = "id=" + addid + "&localitat=" + addlocalitat;

        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    }
}
