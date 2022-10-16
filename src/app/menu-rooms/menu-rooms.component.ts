import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';
import { RoomsMainService } from '../services/rooms-main.service';

@Component({
  selector: 'app-menu-rooms',
  templateUrl: './menu-rooms.component.html',
  styleUrls: ['./menu-rooms.component.css']
})
export class MenuRoomsComponent implements OnInit {
  
  @Input() room:RoomsMainInterface



  constructor() { }

  ngOnInit(): void {

  }

}
