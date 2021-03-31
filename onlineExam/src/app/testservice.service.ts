import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(public http:HttpClient) { }


  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/assets/examquestions.json', name: 'Math Quiz' }
    ];
  }

}
