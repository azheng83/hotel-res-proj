import { Component } from '@angular/core';
import {UsersService} from './get-transport-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Call Transport Api';
  data: any;

  constructor(private api:UsersService) {

  }
  ngOnInit() {
    this.api.apiCall().subscribe((data)=> {
      console.warn('get api data', data);
      this.data = data;
    })
  }
}
