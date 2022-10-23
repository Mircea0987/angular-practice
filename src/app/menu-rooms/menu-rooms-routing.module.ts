import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuRoomsForComponent } from './menu-rooms-for/menu-rooms-for.component';

const routes: Routes = [
  {path:'',component:MenuRoomsForComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoomsRoutingModule { }
