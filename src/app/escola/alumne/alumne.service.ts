import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AlumneService{
private addUrl = 'http://172.17.0.98:8080/cotxe/addMarca';


constructor(private http: Http){}


}