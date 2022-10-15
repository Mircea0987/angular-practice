import { Component, OnInit } from '@angular/core';
import { RoomsMainService } from 'src/app/services/rooms-main.service';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-rooms-model',
  templateUrl: './rooms-model.component.html',
  styleUrls: ['./rooms-model.component.css']
})
export class RoomsModelComponent implements OnInit {

  roomsMainList:RoomsMainInterface[] = []

  constructor(private roomsMain:RoomsMainService) { }

  ngOnInit(): void {
    this.roomsMainList = this.roomsMain.getAllRoomsMain()
  }

}
