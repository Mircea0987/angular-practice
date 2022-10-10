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

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    NavbarComponent,
    VideoContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
