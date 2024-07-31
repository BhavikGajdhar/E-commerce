import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-context',
  templateUrl: './profile-context.component.html',
  styleUrls: ['./profile-context.component.scss'],
})
export class ProfileContextComponent implements OnInit {
  public profileJson: any;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile: any) => {
      this.profileJson = profile;
    });
  }
}
