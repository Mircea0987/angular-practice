import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';
import { RoomsMainService } from '../services/rooms-main.service';

@Component({
  selector: 'app-main-rooms',
  templateUrl: './main-rooms.component.html',
  styleUrls: ['./main-rooms.component.css']
})
export class MainRoomsComponent implements OnInit {
  
  rooms:RoomsMainInterface[] 

  room: RoomsMainInterface;



  constructor(private service:RoomsMainService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getRoomsMain().subscribe((data) => (this.rooms = data));

    this.service.getRoomsMain().subscribe(
      (data) =>
        (this.room = data.find(
          (p) => p.id == this.route.snapshot.params['Id']
        ) as RoomsMainInterface)
        
    );
  }

  }
