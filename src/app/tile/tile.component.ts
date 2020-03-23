import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private _tileID: string;
  @Input() set tileID(value: string){
    this._tileID = value;
    this.updateImagePath(value);
  };
  @Output() getID = new EventEmitter<string>();

  get tileID(): string{
    return this._tileID;
  }

  private currentImagePath: string = "assets/images/logo.png";
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.sendID();
  }

  sendID(){
    this.getID.emit(this.tileID);
  }

  private updateImagePath(id){
    this.currentImagePath = this.createImagePath(id);
  }

  private createImagePath(tileNumber: string): string{
    let singleDigitTileNumber: boolean = Number(tileNumber)<9;
    console.log(`Number: ${Number(tileNumber)} is bigger than 9? ${singleDigitTileNumber}`)
    return singleDigitTileNumber?`assets/images/p0${tileNumber}.png`:`assets/images/p${tileNumber}.png`;
  }

}
