import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playAudio(audioFilePath: string){
    console.log(`Playing audio file: ${audioFilePath}`);
  }
}
