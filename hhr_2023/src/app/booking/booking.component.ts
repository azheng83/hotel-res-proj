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
  checkIn: string = 'Check-In:';
  checkOut: string = 'Check-Out'; 
  numOfGuests: string = 'Number of Guests:'; 
  roomType: string = 'Room Type:'; 
}
