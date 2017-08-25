
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
<<<<<<< HEAD
<<<<<<< HEAD:src/app/home/home.component.ts

=======
<<<<<<< HEAD
=======

>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b
>>>>>>> 0ae364045c9b2f4eea77054ddcd4daa82e3f72a7:src/app/login/login.component.ts
=======
>>>>>>> 66564617540507d1fff2e82085f11c39d4299725
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
}
<<<<<<< HEAD
<<<<<<< HEAD:src/app/home/home.component.ts
=======
=======
}

>>>>>>> 4d8feb49dec917403be7b4da4c7f05f3522cfc2b
>>>>>>> 0ae364045c9b2f4eea77054ddcd4daa82e3f72a7:src/app/login/login.component.ts
=======
>>>>>>> 66564617540507d1fff2e82085f11c39d4299725
