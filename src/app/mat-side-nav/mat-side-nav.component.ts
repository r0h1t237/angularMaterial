import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-side-nav',
  templateUrl: './mat-side-nav.component.html',
  styleUrl: './mat-side-nav.component.css'
})
export class MatSideNavComponent {
isOpen=false;
log(msg:string){
  console.log(msg,new Date().getTime())
}
}
