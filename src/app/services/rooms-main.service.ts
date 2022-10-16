import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Injectable({
  providedIn: 'root'
})
export class RoomsMainService {

  url:string = 'assets/data.json'
  getRoomsMain():Observable <RoomsMainInterface[]>{
    return this.http.get<RoomsMainInterface[]>(this.url)
  }
  constructor(private http:HttpClient) { }
}
