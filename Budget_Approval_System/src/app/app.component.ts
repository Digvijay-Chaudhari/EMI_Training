import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Budget_Approval_System';
  // mediaSub:Subscription;
  // devicexs:boolean;
  constructor(public mediaobserver: MediaObserver){}

  ngOnInit(): void {
    // this.mediaSub = this.mediaobserver.media$.subscribe(
    //   (result:MediaChange)=>{
    //     console.log(result.mqAlias);
    //     this.devicexs = result.mqAlias ==='xs' ? true : false;
    //   })
  }

  ngOnDestroy(): void {
    // this.mediaSub.unsubscribe();
  }
}
