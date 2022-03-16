import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  message="Welcome to Data Binding Example";
  twoway="This is twoway binding";
  constructor() { }

  ngOnInit(): void {
  }

  public showData():void {
    alert ('Event Binding Trigger');
    console.log("Event Binding Triggered on Button Click!!");
  }

}
