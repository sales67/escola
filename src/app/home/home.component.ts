<<<<<<< HEAD
home.component.ts
=======
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
    token:any;
    constructor(
        private router: Router,
        private homeService: HomeService) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
         }

    ngOnInit() {
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
=======
                    console.log(result);
                    // login successful
                    //this.router.navigate(['home']);
>>>>>>> b5cbbb0b6358dcd6dbc2e17b243d78f8000d20de
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
    }
}
>>>>>>> 6f7992c85a7c566351a5bcf7e9ff2126beb15030
