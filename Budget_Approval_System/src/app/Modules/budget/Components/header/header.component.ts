import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log("display checkkkk")
    console.log(this.devicexs)
   }

  user:string='Digvijay';

  ngOnInit(): void {
  }

  @Input() devicexs:boolean;
  
}
