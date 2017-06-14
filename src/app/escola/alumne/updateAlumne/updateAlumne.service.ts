import {Injectable}  from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams,Response}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class UpdateAlumneService{
private updateUrl = 'http://172.17.0.98:8080/escola/updateAlumne?';

constructor(private http: Http){}

updateAlumne(id,camp,resposta){     
   

    
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    params.set('camp', camp);
    params.set('resposta', resposta);

    let options = new RequestOptions({ headers: headers });
    let body = params.toString();
    var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');  

    return this.http.put(this.updateUrl+body,options)    
    .map((response: Response) => {})
           
    }

}