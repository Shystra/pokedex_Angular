import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routin
import { RoutingModule } from './routing.module';


//Pages created by us
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }