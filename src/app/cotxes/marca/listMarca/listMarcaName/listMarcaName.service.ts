import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class ListMarcaNameService{
private listUrl = 'http://172.17.0.98:8080/cotxe/listMarcaName?name=';

constructor(private http: Http){}

getMarcaId(name) {
      var a = this.http.get(this.listUrl+name)
                .map(res => res.json())
      return a;
  }
}