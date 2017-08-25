<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit} from '@angular/core';
>>>>>>> d5480ef7868180ce4b68f91a8b6052b6863be461
import {Http} from '@angular/http';
import { HomeService } from './home/home.service';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-root',                 
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'],  
  providers: [ HomeService ]
})


export class AppComponent implements OnInit{

    
    title = 'Escola Otaku';
<<<<<<< HEAD
    prova;
    logged=true;

    constructor(private http:Http){}

    getProva() {
      this.prova = this.http.get("http://localhost:8080/helloWorld/world")
        .map(res => res.text())
        .subscribe(
            value => this.prova = value,
            error => {},
        );        
    }        
=======
    logged=false;
    observer;

    constructor(private homeService : HomeService,
               private router:Router){}

    test(){
        
    }

    ngOnInit(){
        this.observer=this.homeService.getToken();
        console.log(this.observer);
        if (this.homeService.getToken()=="")
            {
                this.logged=false;
                this.router.navigate(['/home']); 
            }
        else{
            this.logged=true;                        
        }
    }
           
>>>>>>> d5480ef7868180ce4b68f91a8b6052b6863be461
}

