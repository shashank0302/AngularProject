import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditComponent } from './edit/edit.component';
import { ViewthingsComponent } from './viewthings/viewthings.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'viewthings/:id', component: ViewthingsComponent },
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
