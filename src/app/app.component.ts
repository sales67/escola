import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import { LoginService } from './login/login.service';

import { RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],  
  providers: [ LoginService ]
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

