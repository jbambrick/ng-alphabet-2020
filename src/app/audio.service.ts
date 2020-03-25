import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioFile = new Audio();
  constructor() { }

  playAudio(audioFilePath: string){
    console.log(`Playing audio file: ${audioFilePath}`);
    this.audioFile.src = audioFilePath;
    this.audioFile.play();
  }
}
