import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewthingsComponent } from './viewthings/viewthings.component';
import { EditComponent } from './edit/edit.component';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AdminComponent,
    ViewthingsComponent,
    EditComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
