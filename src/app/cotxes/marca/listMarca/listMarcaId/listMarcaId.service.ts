import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class ListMarcaIdService{
private listUrl = 'http://172.17.0.98:8080/cotxe/listMarcaId?id=';

constructor(private http: Http){}

getMarcaId(id) {
      var a = this.http.get(this.listUrl+id)
                .map(res => res.json())
      return a;
  }

}