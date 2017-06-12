import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class PhpDavidService{  
    constructor(private http: Http){}
     login(psswd,user){        
        return this.http.get('http://172.17.0.161/projectes/escola/david/index.php?psswd='+psswd+'&user='+user).map(res => res.text());     
    }
    validar(tokenfet,username){        
        return this.http.get('http://172.17.0.161/escola/token?username='+username+'&tokenfet='+tokenfet).map(res => res.text());     
    }
}