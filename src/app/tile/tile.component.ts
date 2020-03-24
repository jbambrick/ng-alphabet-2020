import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlphabetData } from '../interfaces';
import { DataService } from '../data.service'

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private _tileID: string;
  @Input() set tileID(value: string){
    this._tileID = value;
   // this.updateImagePath(value);
   this.dataService.getAlphabetData().subscribe((dataJSON: IAlphabetData) =>{
    this.alphabetData = dataJSON;
    this.updateTileData(value);
  });
   
  };
  @Output() getID = new EventEmitter<string>();

  get tileID(): string{
    return this._tileID;
  }
  private currentLetter: String = ""; // initialize to empty string to be safe while loading
  private currentWord: String = "";
  private currentImagePath: string = "assets/images/logo.png";
  private alphabetData: IAlphabetData;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.sendID();
  }

  sendID(){
    this.getID.emit(this.tileID);
  }

  private updateImagePath(id: string){
    this.currentImagePath = this.createImagePath(id);
  }

  private createImagePath(tileNumber: string): string{
    let singleDigitTileNumber: boolean = Number(tileNumber)<9;
    console.log(`Number: ${Number(tileNumber)} is bigger than 9? ${singleDigitTileNumber}`)
    return singleDigitTileNumber?`assets/images/p0${tileNumber}.png`:`assets/images/p${tileNumber}.png`;
  }

  private updateLetter(id: string){
    let newLetter: string = this.alphabetData.letter[id];
    console.log(`New Letter: ${newLetter}`);
    (newLetter)? this.currentLetter = newLetter : this.currentLetter = "";
  }

  private updateWord(id: string){
    (this.alphabetData)? this.currentWord = this.alphabetData.word[id]: this.currentWord = "";
  }

  private updateTileData(id: string){
    this.updateImagePath(id);
    this.updateLetter(id);
    this.updateWord(id);
  }

}
