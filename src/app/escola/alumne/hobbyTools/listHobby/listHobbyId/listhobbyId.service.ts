import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'




@Injectable()

export class ListAlumneIdService{
private listAlumne = 'http://172.17.0.98:8080/escola/listAlumne';
private listAlumneId = 'http://172.17.0.98:8080/escola/listAlumneId';


constructor(private http: Http){}

    getAlumneId(id){
        var a = this.http.get(this.listAlumneId+"?id="+id)
            .map(res => res.json());        
        return a;
    }  
}