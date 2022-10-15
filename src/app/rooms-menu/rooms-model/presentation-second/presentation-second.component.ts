import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-presentation-second',
  templateUrl: './presentation-second.component.html',
  styleUrls: ['./presentation-second.component.css']
})
export class PresentationSecondComponent implements OnInit {

  @Input() roomsMainList:RoomsMainInterface[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
