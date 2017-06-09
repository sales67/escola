import { Component, OnInit } from '@angular/core';
import { PhpSergiService } from './phpSergi.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpSergi',
 templateUrl:'./phpSergi.component.html',
 styleUrls: ['../../escola.css'],
 providers: [PhpSergiService]

})
export class PhpSergiComponent {
    consultardades;psswd;user;
    
    constructor(private phpSergiService: PhpSergiService) { }
    consultar_db(){
         this.phpSergiService.consultar()
           .subscribe(
               data => (this.consultardades = data))
    }
    
    login(){       
         this.phpSergiService.login(this.psswd,this.user)
           .subscribe(
               data => (this.consultardades = data))
             }
}
