import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }
  public logout():void{
    this.auth.logout({
      returnTo: window.location.origin
    });
  }
}
