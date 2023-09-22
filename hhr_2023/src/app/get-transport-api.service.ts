import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient
    ) { }
    apiCall() {
      return this.http.get('http://transport.opendata.ch/v1/locations?query=Zurich?type=poi');
    }
}
