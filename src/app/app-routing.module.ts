import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Top10DetailsComponent } from './top10-details/top10-details.component';
import { Top10Component } from './top10/top10.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'top10/:id',
    component: Top10Component,
  },
  { path: 'top10-details/:id', component: Top10DetailsComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'login', component: LoginComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
      
})
export class AppRoutingModule {}
