import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { RouterModule,Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent{
    
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private loginService: LoginService) {}

    ngOnInit() {
        this.loginService.logout(); 
    }


    login() {
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(result => {
            console.log(result);
                if (result === true) {
                    console.log("el resultat es true");
                    window.location.reload();                   
                } else {
                    console.log("el resultat es false");
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            }, error => {
              this.loading = false;
              this.error = error;
            });
    }
}

