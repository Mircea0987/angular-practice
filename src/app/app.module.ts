import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { PresentetionComponent } from './presentetion/presentetion.component';
import { RoomPresentetionComponent } from './presentetion/room-presentetion/room-presentetion.component';
import { ExpereincesComponent } from './presentetion/expereinces/expereinces.component';
import { GastronomicExpereincesComponent } from './presentetion/gastronomic-expereinces/gastronomic-expereinces.component';
import { BeachComponent } from './presentetion/beach/beach.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsMenuComponent } from './rooms-menu/rooms-menu.component';
import { RoomsModelComponent } from './rooms-menu/rooms-model/rooms-model.component';
import { PresentationFirstComponent } from './rooms-menu/rooms-model/presentation-first/presentation-first.component';
import { PresentationTableComponent } from './rooms-menu/rooms-model/presentation-table/presentation-table.component';
import { PresentationSecondComponent } from './rooms-menu/rooms-model/presentation-second/presentation-second.component';
import { PresentationRoomsImageComponent } from './rooms-menu/rooms-model/presentation-rooms-image/presentation-rooms-image.component';
import { RoomsForComponent } from './rooms-menu/rooms-for/rooms-for.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    NavbarComponent,
    VideoContentComponent,
    PresentetionComponent,
    RoomPresentetionComponent,
    ExpereincesComponent,
    GastronomicExpereincesComponent,
    BeachComponent,
    FooterComponent,
    RoomsMenuComponent,
    RoomsModelComponent,
    PresentationFirstComponent,
    PresentationTableComponent,
    PresentationSecondComponent,
    PresentationRoomsImageComponent,
    RoomsForComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
