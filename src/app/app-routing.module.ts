import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsMenuComponent } from './rooms-menu/rooms-menu.component';
import { RoomsModelComponent } from './rooms-menu/rooms-model/rooms-model.component';
import { RoomsComponent } from './rooms/rooms.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {component: VideoContentComponent,path:""},
  {component: RoomsMenuComponent, path:"rooms"},
  {component: RoomsModelComponent, path:"room/:roomType"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
