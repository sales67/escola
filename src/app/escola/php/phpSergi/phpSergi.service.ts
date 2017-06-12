import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class PhpSergiService{  
    
    constructor(private http: Http){}
    consultar() {
       return this.http.get('http://172.17.0.98/projectes/escola/src/app/php/escola/index.php').map(res => res.text());
   }
    login(psswd,user){        
        return this.http.get('http://172.17.0.98/projectes/escola/src/app/php/escola/index.php?psswd='+psswd+"&user="+user).map(res => res.json());
        
    }
    loggedIn;
   token(user,token){      
       
         return this.http.get('http://localhost:8080/escola/login?user='+user+'&token='+token).map(res => res.json())        
    }
}