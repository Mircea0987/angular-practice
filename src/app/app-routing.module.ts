import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MainRoomsComponent } from './main-rooms/main-rooms.component';
import { MenuRoomsForComponent } from './menu-rooms/menu-rooms-for/menu-rooms-for.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {component: VideoContentComponent,path:""},
  {path:"rooms",component:MenuRoomsForComponent},
  {path:"room/:Id",component:MainRoomsComponent},
  {path:"**",component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
