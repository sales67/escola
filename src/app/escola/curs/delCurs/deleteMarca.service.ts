import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class DeleteMarcaService{
private delUrl = 'http://172.17.0.98:8080/cotxe/delMarca';

constructor(private http: Http){}


deleteMarca(deleteId){     
    
 var crear = "?id=" + deleteId;
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ crear, {
           headers: headers
       })
           .map((response: Response) => {})
            
    }

}