
import { Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';

import { LoginService } from './login/login.service';

import { HomeService } from './home/home.service';

import { RouterModule,Router } from '@angular/router';


@Component({

  selector: 'app-root',                 // elemento html consumidor
  templateUrl: './app.component.html',  // ruta relativa a la vista
  styleUrls: ['./app.component.css']   // potencialmente múltiples hojas de estilo
  providers: [ LoginService, HomeService ]

})


export class AppComponent implements OnInit{

    
    title = 'Escola Otaku';

   
    logged=false;

    constructor(private loginService : LoginService,
               private router:Router){}



    logout(){ 
         window.location.reload();
         this.loginService.logout();  
         this.router.navigate(['/login']); 
    }

    ngOnInit(){
        if (this.loginService.getToken()=="")
            {
                this.logged=false;
                this.router.navigate(['/login']); 
            }
        else{
            this.logged=true;  
            this.router.navigate(['/consultar-profe']);
        }
    }

}

