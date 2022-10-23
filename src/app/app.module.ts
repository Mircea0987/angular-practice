import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { PresentetionComponent } from './presentetion/presentetion.component';
import { RoomPresentetionComponent } from './presentetion/room-presentetion/room-presentetion.component';
import { ExpereincesComponent } from './presentetion/expereinces/expereinces.component';
import { GastronomicExpereincesComponent } from './presentetion/gastronomic-expereinces/gastronomic-expereinces.component';
import { BeachComponent } from './presentetion/beach/beach.component';
import { ErrorComponent } from './error/error.component';
import { RequestInterceptor } from './request.interceptor';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { LoginComponent } from './login/login.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    VideoContentComponent,
    PresentetionComponent,
    RoomPresentetionComponent,
    ExpereincesComponent,
    GastronomicExpereincesComponent,
    BeachComponent,
    ErrorComponent,
    TemplateDrivenFormsComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NavbarModule,
    FooterModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent],
  exports:[RoomPresentetionComponent],
  
})
export class AppModule { }
