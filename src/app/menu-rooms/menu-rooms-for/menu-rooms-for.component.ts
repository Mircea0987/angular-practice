import { Component, OnInit } from '@angular/core';
import { RoomsMainService } from 'src/app/services/rooms-main.service';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Component({
  selector: 'app-menu-rooms-for',
  templateUrl: './menu-rooms-for.component.html',
  styleUrls: ['./menu-rooms-for.component.css']
})
export class MenuRoomsForComponent implements OnInit {

  rooms:RoomsMainInterface[]

  constructor(private service:RoomsMainService) { }

  ngOnInit(): void {
    this.service.getRoomsMain().subscribe((data) => (this.rooms = data));
  }

}
