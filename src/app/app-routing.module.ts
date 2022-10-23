import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {path: '', component:VideoContentComponent, pathMatch:'full'},
  {path:"rooms",loadChildren:()=>import('./menu-rooms/menu-rooms.module').then(m=>m.MenuRoomsModule)},
  {path:'room/:Id',loadChildren:()=>import('./main-rooms/rooms.module').then(m=>m.RoomsModule)},
  {path:"template",component:TemplateDrivenFormsComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
