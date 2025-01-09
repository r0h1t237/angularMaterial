import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrl: './mat-tab.component.css'
})
export class MatTabComponent {
   currentIndex:number=0;
  log(index:any){
    console.log(index,'line no 11')
  }
}
