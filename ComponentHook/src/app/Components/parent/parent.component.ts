import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  employee={
    id:24,
    name:'Mayura',
    location:'Bangalore'
  }
  ShowChild=true;
  counter=0;
 
  constructor() {
    console.log("Constructor of ParentComponent");
   }

  ngOnInit(): void {
    console.log("ngOninit of Parent Component");
  }
public  incremenent():void{
  this.counter++;
  console.log(this.counter);
}

public  decrement():void{
  this.counter--;
  console.log(this.counter);
}
hideShowChild()
{
  this.ShowChild=!this.ShowChild;
}
public updateDetails()
{
  this.employee={
    id:56,
    name:'Raghu KS',
    location:'Bangalore'
  }
}

// ngAfterViewInit()
// {
//   console.log('Parent get executed');
// }
// ngOnchanges()
// {
//   console.log("NgOnchanges")
// }

// ngDoCheck()
// {
//   console.log("NfDoCheck")
// }
// ngAfterContentInit()
// {
//   console.log("NgAfterContentInit")
// }
// ngOnDestroy()
// {
//   console.log("NgDestroy");
// }
// ngAfterViewChecked()
// {
//   console.log("ngAfterViewChedked")
// }
// ngAfterContentChecked()
// {
//   console.log("NgafterContentChecked");
// }

}
