import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AddCursaulaService{
private addUrl = 'http://172.17.0.161:8080/escola/addCursaula';
private delUrl = 'http://172.17.0.161:8080/escola/delCursaula'


constructor(private http: Http){}


addCursaulaPost(addidcurs,addidaula){    
    
        var creds = "idcurs=" + addidcurs + "&idaula=" + addidaula;

    //console.log(creds);
        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    }

delCursaula(delid){     
    
 var crear = "?idc=" + delid;
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ crear, {
           headers: headers
       })
           .map((response: Response) => {})
            
    }
}
