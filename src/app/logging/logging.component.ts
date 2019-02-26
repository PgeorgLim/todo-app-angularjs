import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  loginRes : Boolean;

  constructor(private loginService : LoginService,
              private router: Router,
              private location : Location) { }

  ngOnInit() {
    this.getUserState();
  }

  loginUser(){
    //for now this always returns true
    this.loginService.loginUser().subscribe(result => this.loginRes = result);
    this.router.navigate(['list']);
  }

  getUserState(){
    this.loginService.getUserState().subscribe(result => this.loginRes = result);
  }

}
