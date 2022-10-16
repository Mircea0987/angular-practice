import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-presentation-table',
  templateUrl: './presentation-table.component.html',
  styleUrls: ['./presentation-table.component.css']
})
export class PresentationTableComponent implements OnInit {

  @Input() room:RoomsMainInterface
  constructor() { }

  ngOnInit(): void {
  }
}
