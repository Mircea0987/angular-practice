import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-presentation-rooms-image',
  templateUrl: './presentation-rooms-image.component.html',
  styleUrls: ['./presentation-rooms-image.component.css']
})
export class PresentationRoomsImageComponent implements OnInit {

  @Input() room:RoomsMainInterface

  constructor() { }

  ngOnInit(): void {

  }
}
