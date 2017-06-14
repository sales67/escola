import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class ListCursService{
private listUrl = 'http://172.17.0.161:8080/escola/allCurs';
private listCursId = 'http://172.17.0.161:8080/escola/allCursId';

constructor(private http: Http){}

listCurs() {
      var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
  }

provaphp() {
      var a = this.http.get('http://localhost/provaphp.php')
                .map(res => res.text())
      return a;
  }
getCursId(id){
        var a = this.http.get(this.listCursId+"?id="+id)
            .map(res => res.json());        
        return a;
    }  


}