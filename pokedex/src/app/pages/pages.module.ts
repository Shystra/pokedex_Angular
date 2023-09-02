import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routin
import { RoutingModule } from './routing.module';

//Modules created by us
import { SharedModule } from '../shared/shared.module';

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
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
