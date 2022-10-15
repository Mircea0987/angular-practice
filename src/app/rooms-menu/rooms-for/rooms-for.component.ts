import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-rooms-for',
  templateUrl: './rooms-for.component.html',
  styleUrls: ['./rooms-for.component.css']
})
export class RoomsForComponent implements OnInit {

  roomsMainList:RoomsMainInterface | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
