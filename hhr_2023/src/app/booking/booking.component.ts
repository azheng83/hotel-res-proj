import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookNextStay: string = 'Book Your Next Stay'; 
  name: string = 'Name:'; 
  email: string = 'Email:'; 
  telNumber: string = 'Phone Number:';
  checkIn: string = 'Check-In:';  //make this an interface instead, import interface
  checkOut: string = 'Check-Out'; //for the interface, make them data types for the input, then choose a label for them. 
  numOfGuests: string = 'Number of Guests:'; //in html file. In TS file: use django rest framework API to capture data & send to the database, method creation
  roomType: string = 'Room Type:'; 
}
