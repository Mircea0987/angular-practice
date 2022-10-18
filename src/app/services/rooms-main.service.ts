import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Injectable({
  providedIn: 'root'
})
export class RoomsMainService {



  url:string = 'assets/data.json'

  $getRoomsMain = this.http.get<RoomsMainInterface[]>(this.url).pipe(
    shareReplay(1)
  )

  getRoomsMain():Observable <RoomsMainInterface[]>{
    return this.http.get<RoomsMainInterface[]>(this.url)
  }
  constructor(private http:HttpClient) { }
}
