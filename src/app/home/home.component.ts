import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Tŝilhqot’in Alphabet';

  constructor() { }

  ngOnInit() {
  }

  onClickMe(){
    console.log(`You clicked me on page ${this.title}`);
  }
}