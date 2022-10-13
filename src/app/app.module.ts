import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
