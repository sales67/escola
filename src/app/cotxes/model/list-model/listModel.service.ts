import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class listModelService{
private listUrl = 'http://172.17.0.242:8080/demo/list';

constructor(private http: Http){}

getModels() {
      var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
  }

}