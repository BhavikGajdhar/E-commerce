import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { MasterComponent } from './component/master/master.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './component/login-button/login-button.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LogoutButtonComponent } from './component/logout-button/logout-button.component';
import{environment as evn}from "../../environments/environment";
import { ProfileContextComponent } from './component/profile-context/profile-context.component';
import { AddToCardComponent } from './component/add-to-card/add-to-card.component'
import { SharedModule } from '../shared/shared.module';
import { CommunicationService } from './service/communication.service';

@NgModule({
  declarations: [
    HeaderComponent,
    MasterComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileContextComponent,
    AddToCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AuthModule.forRoot({...evn.auth}),
    SharedModule
  ],
  exports:[
    MasterComponent,
    HeaderComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileContextComponent,
    AddToCardComponent
  ],
  providers:[CommunicationService]
})
export class CoreModule {}
