import { Component, OnInit } from '@angular/core';
import { SeatComponent } from '../seat/seat.component';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
	rows: any[];
	columns: any[];
	selectedSeat: any[];
  constructor() { 
  	this.rows = ["A", "B", "C", "D", "E", "F", "G"];
  	this.columns = [1,2,3,4,5,6,7,8,9,10,11,12];
  	this.selectedSeat = [];
  }

  ngOnInit() {
  }
  get isActive(){
  	return this.selectedSeat.length > 0;
  }
  get selectedSeats(){
  	return this.selectedSeat.join(", ");
  }
  bookNow(event){
  	console.log(this.selectedSeat);
  	let alreadyBooked = localStorage.getItem('bookedTickets') ? JSON.parse(localStorage.getItem('bookedTickets')) : [];
  	let concatedTickets = alreadyBooked.concat(this.selectedSeat);
  	localStorage.setItem('bookedTickets', JSON.stringify(concatedTickets));
  	let confirmMessage = "You have booked "+this.selectedSeat.length+" ticket(s). Seat Number "+this.selectedSeat.join(", ")+". Thanks for ticket booking";
  	console.log(JSON.parse(localStorage.getItem('bookedTickets')));
  	alert(confirmMessage);
		window.location.href="/"

  }

}
