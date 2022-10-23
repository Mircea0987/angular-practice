import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { PresentationFirstComponent } from './presentation-first/presentation-first.component';
import { PresentationRoomsImageComponent } from './presentation-rooms-image/presentation-rooms-image.component';
import { PresentetionSecondComponent } from './presentetion-second/presentetion-second.component';
import { PresentationTableComponent } from './presentation-table/presentation-table.component';
import { MainRoomsComponent } from './main-rooms.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { MenuRoomsModule } from '../menu-rooms/menu-rooms.module';


@NgModule({
  declarations: [
    PresentationFirstComponent,
    PresentationRoomsImageComponent,
    PresentetionSecondComponent,
    PresentationTableComponent,
    MainRoomsComponent,

  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    NavbarModule,
    FooterModule,
    MenuRoomsModule
  ]
})
export class RoomsModule { }
