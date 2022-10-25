import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'main', component:VideoContentComponent},
  {path:"rooms",loadChildren:()=>import('./menu-rooms/menu-rooms.module').then(m=>m.MenuRoomsModule),canActivate:[LoginGuard], canLoad:[LoginGuard]},
  {path:'room/:Id',loadChildren:()=>import('./main-rooms/rooms.module').then(m=>m.RoomsModule),canActivate:[LoginGuard], canLoad:[LoginGuard]},
  {path:"template",component:TemplateDrivenFormsComponent, canActivate:[LoginGuard], canLoad:[LoginGuard]},
  { path: 'booking', loadChildren: () => import('../booking/booking.module').then(m => m.BookingModule),canActivate:[LoginGuard], canLoad:[LoginGuard] },
  {path:'reactive',component:ReactiveFormsComponent},
  {path:"**",component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
