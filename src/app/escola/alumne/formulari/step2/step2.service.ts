import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()

export class Step2Service{
    
    hobbies="http://172.17.0.98:8080/escola/listHobby";
        
    constructor(private http: Http){}
    
    getHobbies() {        
      var a = this.http.get(this.hobbies)
                .map(res => res.json());        
      return a;
    } 
    
}