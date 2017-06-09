import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class PhpSergiService{  
    constructor(private http: Http){}
    consultar() {
       return this.http.get('http://localhost/projectes/php/escola/index.php').map(res => res.text());
   }
}