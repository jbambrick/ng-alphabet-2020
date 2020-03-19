import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tileID: string;
  @Output() getID = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendID(){
    this.getID.emit(this.tileID);
  }

}
