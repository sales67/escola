import { Component, OnInit} from '@angular/core';
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
           
}

