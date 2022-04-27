import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  mediaSub:Subscription;
  devicexs:boolean;

  constructor(public mediaobserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.devicexs = result.mqAlias === 'xs' ? true : false;
      })
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
