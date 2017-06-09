import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Escola Otaku';

 private data;
 
    constructor(private http:Http){
    }
 
    ngOnInit(){
    	this.getData();
    }
 
    getData(){
        this.http.get('http://localhost/AngularWithPhpTest/')
        		.subscribe(res => this.data = res.json());
    }
}

