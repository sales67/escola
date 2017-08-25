import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
<<<<<<< HEAD

import { LoginService } from './login/login.service';

import { HomeService } from './home/home.service';

=======
import { LoginService } from './login/login.service';
>>>>>>> d50c450510aa82219d860006e600d25f105f186d
import { RouterModule,Router } from '@angular/router';


@Component({
<<<<<<< HEAD

  selector: 'app-root',                 // elemento html consumidor
  templateUrl: './app.component.html',  // ruta relativa a la vista
  styleUrls: ['./app.component.css']   // potencialmente múltiples hojas de estilo
  providers: [ LoginService, HomeService ]
=======
  selector: 'app-root',                 // elemento html consumidor
  templateUrl: './app.component.html',  // ruta relativa a la vista
  styleUrls: ['./app.component.css'],   // potencialmente múltiples hojas de estilo
  providers: [ LoginService ]
>>>>>>> d50c450510aa82219d860006e600d25f105f186d

})


export class AppComponent implements OnInit{

    
    title = 'Escola Otaku';

   
    logged=false;

    constructor(private loginService : LoginService,
               private router:Router){}



    logout(){ 
         window.location.reload();
         this.loginService.logout();  
         this.router.navigate(['/home']); 
    }

    ngOnInit(){
        if (this.loginService.getToken()=="")
            {
                this.logged=false;
                this.router.navigate(['/home']); 
            }
        else{
            this.logged=true;  
            this.router.navigate(['/home']);
        }
    }

}

