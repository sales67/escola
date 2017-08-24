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

    constructor(
        private router: Router,
        private homeService: HomeService) { }

    ngOnInit() {
        // reset login status
        this.homeService.logout();
    }

    login() {
        this.loading = true;
        this.homeService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    console.log("el resultat es true");
                    this.router.navigate(['/consultar-profe']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            }, error => {
              this.loading = false;
              this.error = error;
            });
    }
}