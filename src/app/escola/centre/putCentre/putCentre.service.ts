import {Injectable}  from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams,Response}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class putCentreService{
private updateUrl = 'http://172.17.0.242:8080/centre/put?';

constructor(private http: Http){}

putCentre(addid,addnom,addlocalitat){     
   
    /*
    var creds = "id=" + addId +  "&name=" + addName + "&telefon=" + addTel + "&pais=" + addCountry + "&correu=" + addMail;
        
        var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');       

        var a = this.http.put(this.updateUrl+creds,{
            headers:headers
        })
                    .map(res => res.json());
    return a;
    */
    
        let params: URLSearchParams = new URLSearchParams();
params.set('id', addid);
params.set('name', addlocalitat);
params.set('telefon', addnom);


    let options = new RequestOptions({ headers: headers });
    let body = params.toString();
    var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');  

return this.http.put(this.updateUrl+body,options)    
    .map((response: Response) => {})
           
}
}