import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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


import { HttpClient } from '@angular/common/http';
import { MenuRoomsComponent } from './menu-rooms/menu-rooms.component';
import { MenuRoomsForComponent } from './menu-rooms/menu-rooms-for/menu-rooms-for.component';
import { MainRoomsComponent } from './main-rooms/main-rooms.component';
import { PresentationFirstComponent } from './main-rooms/presentation-first/presentation-first.component';
import { PresentationRoomsImageComponent } from './main-rooms/presentation-rooms-image/presentation-rooms-image.component';
import { PresentetionSecondComponent } from './main-rooms/presentetion-second/presentetion-second.component';
import { PresentationTableComponent } from './main-rooms/presentation-table/presentation-table.component';
import { ErrorComponent } from './error/error.component';
import { RequestInterceptor } from './request.interceptor';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { LoginComponent } from './login/login.component';


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
    MenuRoomsComponent,
    MenuRoomsForComponent,
    MainRoomsComponent,
    PresentationFirstComponent,
    PresentationRoomsImageComponent,
    PresentetionSecondComponent,
    PresentationTableComponent,
    ErrorComponent,
    TemplateDrivenFormsComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent],
  exports:[RoomPresentetionComponent,
  PresentationFirstComponent
  ],
  
})
export class AppModule { }
