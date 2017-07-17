import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';
@Injectable()

export class Step2Service{
    
    hobbies="http://172.17.0.98:8080/escola/listHobby";
        
    constructor( public authHttp: AuthHttp){}
    
    getHobbies() {     
      var a = this.authHttp.get(this.hobbies)
                .map(res => res.json());        
      return a; 
      
    } 
    
}