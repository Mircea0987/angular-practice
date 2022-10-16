import { Component, Input, OnInit } from '@angular/core';
import { RoomsMainService } from 'src/app/services/rooms-main.service';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-presentation-first',
  templateUrl: './presentation-first.component.html',
  styleUrls: ['./presentation-first.component.css']
})
export class PresentationFirstComponent implements OnInit {
  
  @Input() room:RoomsMainInterface


  rooms:RoomsMainInterface[] 


  constructor(private service:RoomsMainService) { }

  ngOnInit(): void {

  }


}
