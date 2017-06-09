import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class listCentreService{
private listUrl = 'http://172.17.0.242:8080/centre/list';

constructor(private http: Http){}

listCentre() {
      var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
  }

test() {
       return this.http.get('http://localhost/prova/School/src/app/escola/centre/php/test.php').map(res => res.text());
   }
}