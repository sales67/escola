import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";

@Injectable()

export class addModelService{
  private baseUrl = 'http:172.17.0.242:8080/demo/';
  private modelUrl = this.baseUrl + 'getModelXmarca?marca=';
  private listUrl = this.baseUrl + 'list';

  constructor (private http: Http){}
  errorMesage: string;

  getList(){
    var a = this.http.get(this.listUrl).map(res=>res.json())
    return a;
  }
  getModel(idMarca){
    var a = this.http.get(this.modelUrl+idMarca)
                .map(res => res.json())
      return a;
  }
   
addModelPost(addName,addMarca){     
        var creds = "model=" + addName + "&marca=" + addMarca;
        
        //let creds = {model: addName, marca:addMarca};

        var headers = new Headers();       
        //headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');       

        
        var a = this.http.post('http://172.17.0.242:8080/demo/newModel',creds,{
            headers:headers
        })
                    .map(res => res.json());
        return a; 
    }

}