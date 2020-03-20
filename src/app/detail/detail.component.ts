import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ITileState } from '../interfaces'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  state$: Observable<object>;
  currentID: string = "1";

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state));

    this.state$.subscribe((state: ITileState)=>{
      if(state.id){
        console.log(`Got ${state.id} from state`);
        this.currentID = state.id;
      }
    })
  }
}

