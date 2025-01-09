import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrl: './mat-list.component.css'
})
export class MatListComponent {
  value=''
  date1=new Date(new Date().getTime()-1000*60*10)
  date2=new Date(new Date().getTime()-1000*60*5)
  log(content:string){
    console.log(content ,'line 11')
  }
  print(event: any){
   this.value= event.selectedOptions.selected.map((el: any)=>el.value).join()
  }

}
