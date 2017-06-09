import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class PhpDavidService{  
    constructor(private http: Http){}
    provaphp() {
       return this.http.get('http://172.17.0.161/projectes/escola/src/app/php/escola/index.php').map(res => res.text());//cadascu la seva ip pq funcioni
   }
}