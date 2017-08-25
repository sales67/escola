import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'home',
 templateUrl:'./home.component.html',
 styleUrls: ['../escola.css'],
 providers: [HomeService]

})
export class HomeComponent {

}
 