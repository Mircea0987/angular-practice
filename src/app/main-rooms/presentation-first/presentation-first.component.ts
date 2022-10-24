import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-presentation-first',
  templateUrl: './presentation-first.component.html',
  styleUrls: ['./presentation-first.component.css']
})
export class PresentationFirstComponent implements OnInit {
  
  @Input() room:RoomsMainInterface

  constructor() { }

  ngOnInit(): void {}


}
