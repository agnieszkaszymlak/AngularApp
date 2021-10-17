//import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';


import { Component} from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  data:any=[]
  constructor(private user:UsersService)
  {
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data=Object.values(data)
    })
}
}
