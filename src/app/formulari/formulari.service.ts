import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormulariService {
    
    myURL = 'http://172.17.0.191:8080/escola';
    urlJava = '/java?usuari=';
    
    constructor(private http: Http) { }

    validar(name, pass) {
        return this.http
                   .get('http://localhost/school/php/validar.php?name=' + name + '&pass=' + pass)
                   //.map(res => res.text());
                     .map(res => res.json());
    }
    

    java(usuari, usuarit) {
        return this.http
                   .get(this.myURL + this.urlJava + usuari + '&usuarit=' + usuarit)
                   .map(res => res.json());
    }
}