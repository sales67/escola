import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        console.log("iniciat");
        this.authenticationService.logout();
    }

    login() {
        console.log("dins component login");
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)//.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    console.log("el resultat es true");
                    this.router.navigate(['/consultar-profe']);
                } else {
                    console.log("el resultat es false");
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
