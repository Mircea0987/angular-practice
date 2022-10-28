import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormsService {
  constructor(private http: HttpClient) {}

  post(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
