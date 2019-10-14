import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path: '',children: [
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'aboutUs',component:AboutUsComponent},
    // {path:'',redirectTo:'RegistrationComponent',pathMatch:'full'}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
