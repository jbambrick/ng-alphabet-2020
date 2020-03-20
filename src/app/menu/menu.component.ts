import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tiles: string[] = ['1','2','3'];
  private numberOfLettersInAlphabet: number = 53;
  private numberOfMenuRows: number = 3;
  private numberOfMenuColumns: number = 3;
  private numberOfMenuItems: number = this.numberOfMenuColumns*this.numberOfMenuRows; // calculate for consistency

  menuRows = 
  [[ 
    {id:"1"},
    {id:"7"},
    {id:"13"}
  ],
  [ 
    {id:"19"},
    {id:"25"},
    {id:"31"}
  ],
  [ 
    {id:"37"},
    {id:"43"},
    {id:"49"}
  ]];

  constructor() { }

  ngOnInit() {
  }

  onClickMenuItem(){
    console.log('Item tapped');
  }

  receiveID(id: string){
    console.log(`You clicked tile ${id}`);
  }

}
