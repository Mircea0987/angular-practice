import {Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],

})
export class RoomsComponent implements OnInit {

roomList: RoomList[] = []

availableRoom = 10

toggleTable = false

constructor(private room: RoomsService) {}

ngOnInit(): void{
  this.roomList = this.room.getRooms()
}

selectRoom(room:any){
  console.log(room)
}
toggle(){
  this.toggleTable = !this.toggleTable
}

}
