import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import alphabetJSON from './data.json';
import { IAlphabetData}  from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private alphabetData: IAlphabetData = alphabetJSON;

  constructor() { }

  public getAlphabetData(): Observable<any> {
    return of(this.alphabetData);
  }

}
