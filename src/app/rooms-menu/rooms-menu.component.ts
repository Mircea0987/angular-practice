import { Component, OnInit } from '@angular/core';
import { RoomsMenuInterface } from 'src/Interfaces/roomsMenuInterface';
import { RoomsMenuService } from '../services/rooms-menu.service';

@Component({
  selector: 'app-rooms-menu',
  templateUrl: './rooms-menu.component.html',
  styleUrls: ['./rooms-menu.component.css']
})
export class RoomsMenuComponent implements OnInit {

  roomsMenuList:RoomsMenuInterface[] = []
  constructor(private roomsMenu:RoomsMenuService) {}

  ngOnInit(): void {
    this.roomsMenuList = this.roomsMenu.getRoomsMenu()
  }

}
