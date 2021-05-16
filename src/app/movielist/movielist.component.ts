import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovieListComponent implements OnInit {
movies : any[];
  constructor() {
  	this.movies = [{
  		name: "Matrix",
  		image_path: "assets/images/3.jpg",
		desc: "At the Oracle's behest, Neo attempts to rescue the Keymaker and realises that to save Zion within 72 hours, he must confront the Architect. Meanwhile, Zion prepares for war against the machines.",
  		id: 1
  	},{
  		name: "Gravity",
  		image_path: "assets/images/2.jpeg",
		desc: "On an outer space mission, Dr Ryan Stone, an engineer, and Matt Kowalski, an astronaut, are hit by high-speed space debris. As the situation gets dire, Stone, the lone survivor, rises to the occasion.",
  		id: 2
  	},{
  		name: "Interstellar",
  		image_path: "assets/images/1.jpg",
		desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  		id: 3
  	}];
   }

  ngOnInit() {
  }

}
