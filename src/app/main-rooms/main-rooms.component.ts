import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, Subject, Subscription } from 'rxjs';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';
import { RoomsMainService } from '../services/rooms-main.service';

@Component({
  selector: 'app-main-rooms',
  templateUrl: './main-rooms.component.html',
  styleUrls: ['./main-rooms.component.css']
})
export class MainRoomsComponent implements OnInit, OnDestroy {
  
  rooms:RoomsMainInterface[] 

  room: RoomsMainInterface;

  subscription: Subscription

  // $getRoomsMain = this.http.get<RoomsMainInterface[]>(this.url).pipe(
  //   shareReplay(1)
  // )


  roomsCount$ = this.service.$getRoomsMain.pipe(
    map((rooms) => rooms.length)
   )


  constructor(private service:RoomsMainService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.service.$getRoomsMain.pipe(
    map((data ) => this.rooms = data)
   )

    this.service.$getRoomsMain.subscribe(
      (data) =>
        (this.room = data.find(
          (p) => p.id == this.route.snapshot.params['Id']
        ) as RoomsMainInterface)
        
    );
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  }
