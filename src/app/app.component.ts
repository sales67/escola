
import { Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';
<<<<<<< HEAD
=======
import { HomeService } from './home/home.service';
import { RouterModule,Router } from '@angular/router';
>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b

@Component({
<<<<<<< HEAD
  selector: 'app-root',                 // elemento html consumidor
  templateUrl: './app.component.html',  // ruta relativa a la vista
  styleUrls: ['./app.component.css']   // potencialmente múltiples hojas de estilo
=======
  selector: 'app-root',                 
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'],  
  providers: [ HomeService ]
>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b
})


export class AppComponent implements OnInit{

    
    title = 'Escola Otaku';

   
    logged=false;
    observer;

    constructor(private homeService : HomeService,
               private router:Router){}



    logout(){ 
         window.location.reload();
         this.homeService.logout();  
         this.router.navigate(['/home']); 
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

<<<<<<< HEAD
=======
           
>>>>>>> b36a59aab447d8b62759d7bfff2047688ab4d739
}

