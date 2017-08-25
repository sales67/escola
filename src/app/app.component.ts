
import { Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';
<<<<<<< HEAD
import { LoginService } from './login/login.service';
=======
<<<<<<< HEAD
=======
import { HomeService } from './home/home.service';
>>>>>>> 893d4ddf52b65ccc3547a258c63b98a759f6f07c
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
<<<<<<< HEAD
  providers: [ LoginService ]
=======
  providers: [ HomeService ]
>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b
>>>>>>> 893d4ddf52b65ccc3547a258c63b98a759f6f07c
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

