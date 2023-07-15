import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;
  constructor(private store :Store<any>){
    this.store.subscribe((res)=>{
      this.count = res.counter.n
    })
  }
  inc(){
    this.store.dispatch({type:'inc'});
  }
  dec(){
    this.store.dispatch({type:'dec'});
  }
  back(){
    this.store.dispatch({type:'back'});
  }
}
