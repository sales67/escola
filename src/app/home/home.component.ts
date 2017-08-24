
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent {
    //constructor(private homeService: HomeService) { }
    
    model: any = {};
    loading = false;
    error = '';
    //token:any;

    constructor(
        private router: Router,
        private homeService: HomeService) {
        //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //this.token = currentUser && currentUser.token;
        }

    ngOnInit() {
        console.log("iniciat");
        // reset login status
        this.homeService.logout();
    }


    login() {
        this.loading = true;
        this.homeService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
<<<<<<< HEAD
                    console.log("el resultat es true");
                    this.router.navigate(['/consultar-profe']);
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
=======

                    console.log("el resultat es true");
                    this.router.navigate(['/consultar-profe']);

                    console.log(result);

>>>>>>> 122e80dc50d44211b8ec2afad94d8b0fe2c7a0fc
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
    }*/
}
=======
    }
}

>>>>>>> 122e80dc50d44211b8ec2afad94d8b0fe2c7a0fc
