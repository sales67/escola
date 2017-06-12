import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class PhpJaumeCService{  
    constructor(private http: Http){}
    validar(id,token) {
       return this.http.get('http://172.17.0.242/centre/token/?id='+id+'&token='+token).map(res => res.json());
   }
    login(psswd,user){        
        return this.http.get('http://172.17.0.242/prova/School/src/app/php/escola/index.php?psswd='+psswd+"&user="+user).map(res => res.json());
        
    }
}