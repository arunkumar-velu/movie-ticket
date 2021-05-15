import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
	@Input() row: number;
	@Input() column: number;
	@Input() selectedSeat: any[];
	selectedSeats : any[];
	wasClicked : boolean;
	alreadyBooked: any[];
  constructor() { 
  	this.selectedSeats = [];
  	this.wasClicked = false;
  	this.alreadyBooked = localStorage.getItem('bookedTickets') ? JSON.parse(localStorage.getItem('bookedTickets')) : [];
  }

  ngOnInit() {
  }
  get isBooked(){
  	let currentSeat = this.row+this.column;
  	return this.alreadyBooked.includes(currentSeat);
  }
  get isSpace(){
	  return (this.column === 2 || this.column === 10 || this.column === 18)
  }
  select(event, row, column){
  	if(this.isBooked){
  		return false;
  	}
  	let currentSeat = row+column;
  	let isAlreadySelected = this.selectedSeat.includes(currentSeat);
  	this.wasClicked = !this.wasClicked;
  	if(!isAlreadySelected){
  		this.selectedSeat.push(currentSeat);
  	}else{
  		let index = this.selectedSeat.indexOf(currentSeat)
  		this.selectedSeat.splice(index, 1);
  	}
  }

}
