import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-virtual-scroll',
  templateUrl: './mat-virtual-scroll.component.html',
  styleUrl: './mat-virtual-scroll.component.css'
})
export class MatVirtualScrollComponent {
numbers:number[]=[]
constructor(){
  for(let i=0;i<1000;i++){
    this.numbers.push(i)
  }
}
}
