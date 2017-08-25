
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
<<<<<<< HEAD:src/app/home/home.component.ts

=======
<<<<<<< HEAD
=======

>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b
>>>>>>> 0ae364045c9b2f4eea77054ddcd4daa82e3f72a7:src/app/login/login.component.ts
                    console.log("el resultat es true");
<<<<<<< HEAD:src/app/login/login.component.ts
                    window.location.reload();
                    this.router.navigate(['consultar-profe']);                    
=======
                    this.router.navigate(['/consultar-profe']);
                    console.log(result);
                    // login successful



                    window.location.reload()
                    this.router.navigate(['consultar-profe']);                   
                    
>>>>>>> 893d4ddf52b65ccc3547a258c63b98a759f6f07c:src/app/home/home.component.ts
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

<<<<<<< HEAD
>>>>>>> 122e80dc50d44211b8ec2afad94d8b0fe2c7a0fc
>>>>>>> c5e2a72e68516af98cb3eff83c4fd7d442b9912b
=======
>>>>>>> 0375a0fc732131a324f0125fd4034ee23406b92f
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
<<<<<<< HEAD
<<<<<<< HEAD
    }*/
<<<<<<< HEAD
}
<<<<<<< HEAD:src/app/home/home.component.ts
=======
=======
}

>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b
>>>>>>> 0ae364045c9b2f4eea77054ddcd4daa82e3f72a7:src/app/login/login.component.ts
