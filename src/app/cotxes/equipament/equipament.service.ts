import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions }  from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";
import { Subject } from 'rxjs/Subject';

import { Equipament } from './equipament';

@Injectable()
export class EquipamentService {
    
    myURL = 'http://172.17.0.191:8080';

    constructor(private http: Http){ }
    
    equipamentBuit(): Equipament {
        // return new Equipament(10, "a", "a", 10, "a", false, false, false, false, false, false, false, false, 10);
        return new Equipament();
    }
    
    getEq(id) {
      var a = this.http.get(this.myURL + '/demo/unXidIt2?id=' + id)
      .map(res => res.json())
      return a;
    }

    /*getEq2(id) {
        return this.http
            .get(this.myURL + '/demo/unXidIt?id=' + id)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Error al servidor'));
    }*/

    getEqs() {
        var a = this.http.get(this.myURL + '/demo/all')
        .map(res => res.json())
      
        return a;
    }

    // NO CAL AQUESTA FUNCIÓ ??
    // li passem l'ID de l'equipament i retorna l'ID del model
    getIdModel(id) {
        var a = this.http.get(this.myURL + '/demo/getIdModel?id=' + id)
        .map(res => res.json())
      // console.log("aaaaa:"+a);
        return a;
    }

    funcioJaume(model) {
        /*var a = this.http.get(this.myURL + '/demo/getIdModel?id=' + id)
            .map(res => res.json())
        
        return a;*/
        return ["Renault", "Scènic"];
    }

    esborrarEq(id) {
        var a = this.http.delete(this.myURL + '/demo/del?id=' + id)
        .map(res => res.json())
      
        return a;
    }

    esborraEqXidModel(model) {
        var a = this.http.delete(this.myURL + '/demo/delXidModel?model=' + model)
        .map(res => res.json())
      
        return a;
    }

    /*modEq(id, parametre, valor) {
        
        var parametres = 'id=' + id + '&parametre=' + parametre + '&valor=' + valor;
        
        return this.http
            .put(this.myURL + '/demo/put?id=' + id + '&parametre=' + parametre + '&valor=' + valor)
            .map(response => response.json());
    }*/

    modEq(id, parametre, valor) {
        
        var creds = 'id=' + id + '&parametre=' + parametre + '&valor=' + valor;
        
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*'); 
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.put(this.myURL + '/demo/put?id=' + id + '&parametre=' + parametre + '&valor=' + valor, creds, {
            headers:headers
        }).map(res => res.json()).catch(this.handleError);
      
        return a;
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return Observable.throw(errMsg);
    }


    crearEquipamentPost(nom, combustible, potencia, traccio, clima, llantes17, llantes18, llantes19, navegador, pintura, multi6, multi9, preu) {
        
        /*let data = new URLSearchParams();
        data.append('name', nom);
        data.append('combustible',combustible);
        data.append('potencia',potencia);
        data.append('traccio',traccio);
        data.append('climatitzador',clima);
        data.append('llantes17',llantes17);
        data.append('llantes18',llantes18);
        data.append('llantes19',llantes19);
        data.append('navegador',navegador);
        data.append('pintura',pintura);
        data.append('multimedia6',multi6);
        data.append('multimedia9',multi9);
        data.append('preu',preu);
     
        let credsObj = {name: nom, combustible:combustible, potencia:potencia, traccio:traccio, climatitzador:clima, llantes17:llantes17, llantes18:llantes18, llantes19:llantes19,
                       navegador:navegador, pintura:pintura, multimedia6:multi6, multimedia9: multi9, preu:preu};*/
        
        var creds = "name=" + nom + "&combustible=" + combustible + "&potencia=" + potencia + "&traccio=" + traccio + "&climatitzador=" + clima +
                     "&llantes17=" + llantes17 + "&llantes18=" + llantes18 + "&llantes19=" + llantes19 + "&navegador=" + navegador +
                     "&pintura=" + pintura  + "&multimedia6=" + multi6  + "&multimedia9=" + multi9 + "&preu=" + preu;
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.myURL + '/demo/add?', creds, {
            headers:headers
        }).map(res => {console.log("la resposta és: " + res.json()), res.json()})   
    }
}