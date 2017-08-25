
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
    //token:any;

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
                    this.router.navigate(['consultar-profe']);                    
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
    /*login() {
        this.loading = true;
        this.homeService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {

                    console.log("el resultat es true");
                    this.router.navigate(['/consultar-profe']);
                    console.log(result);
                    // login successful
                    //this.router.navigate(['home']);

                    console.log("el resultat es true");
                    this.router.navigate(['/consultar-profe']);

                    console.log(result);

                } else {
                    // login failed                    
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
                //console.log(result);
            }, error => {
              this.loading = false;
              this.error = error;
            });
  }*/

    
}

