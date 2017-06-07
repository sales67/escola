import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'




@Injectable()

export class AlumneService{
private listUrl = 'http://172.17.0.98:8080/escola/listAlumne';


constructor(private http: Http){}


    getAlumnes() {        
      var a = this.http.get(this.listUrl)
                .map(res => res.json());
        console.log(a);
      return a;
  }
}