import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MainRoomsComponent } from './main-rooms/main-rooms.component';
import { MenuRoomsForComponent } from './menu-rooms/menu-rooms-for/menu-rooms-for.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {path: '', component:VideoContentComponent, pathMatch:'full'},
  {path:"rooms",component:MenuRoomsForComponent},
  {path:"room/:Id",component:MainRoomsComponent},
  {path:"template",component:TemplateDrivenFormsComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
