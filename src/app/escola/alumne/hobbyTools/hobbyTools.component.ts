import {Component, OnInit} from '@angular/core';
import {HobbyToolsService} from './hobbyTools.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'hobbyTools',
  templateUrl:'./hobbyTools.component.html',
  styleUrls: ['../../escola.css'],
  providers: [HobbyToolsService],  
})

    export class HobbyToolsComponent{
           
 constructor(private hobbyToolsService: HobbyToolsService) { } 
    }
        
    