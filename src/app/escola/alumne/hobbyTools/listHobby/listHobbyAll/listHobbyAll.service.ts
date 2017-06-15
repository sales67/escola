import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'




@Injectable()

export class ListHobbyAllService{
private listAlumne = 'http://172.17.0.98:8080/escola/listAlumne';

constructor(private http: Http){}

   getHobbies() {        
      var a = this.http.get(this.listAlumne)
                .map(res => res.json());        
      return a;
    } 
}