import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-tile',
  templateUrl: './menu-tile.component.html',
  styleUrls: ['./menu-tile.component.css']
})
export class MenuTileComponent implements OnInit {
  @Input() tileID: string;
  @Output() getID = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendID(){
    this.getID.emit(this.tileID);
  }
}