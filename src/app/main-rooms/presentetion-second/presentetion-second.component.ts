import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-presentetion-second',
  templateUrl: './presentetion-second.component.html',
  styleUrls: ['./presentetion-second.component.css']
})
export class PresentetionSecondComponent implements OnInit {

  @Input() room:RoomsMainInterface
  constructor() { }

  ngOnInit(): void {
  }

}
