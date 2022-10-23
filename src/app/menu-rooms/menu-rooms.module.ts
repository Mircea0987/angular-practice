import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoomsRoutingModule } from './menu-rooms-routing.module';
import { MenuRoomsComponent } from './menu-rooms.component';
import { MenuRoomsForComponent } from './menu-rooms-for/menu-rooms-for.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [MenuRoomsComponent,
    MenuRoomsForComponent
],
  imports: [
    CommonModule,
    MenuRoomsRoutingModule,
    NavbarModule
    
  ]
})
export class MenuRoomsModule { }
