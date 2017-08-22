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
  		id: 1
  	},{
  		name: "Gravity",
  		image_path: "assets/images/2.jpeg",
  		id: 2
  	},{
  		name: "Interstellar",
  		image_path: "assets/images/1.jpg",
  		id: 3
  	}];
   }

  ngOnInit() {
  }

}
