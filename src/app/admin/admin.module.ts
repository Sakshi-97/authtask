import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from '../auth.guard';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, AboutUsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard],
})
export class AdminModule { }
