import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mat-radio-button',
  templateUrl: './mat-radio-button.component.html',
  styleUrl: './mat-radio-button.component.css'
})
export class MatRadioButtonComponent {
 choose=''
 course1=this.fb.group({
  course:''
 })
 constructor(private fb :FormBuilder){

 }
  selectedValue(){
    console.log('hi',this.choose)
  }

  onSubmit(formData: any){
    console.log('template driven',formData)
  }

  onSubmit1(){
    console.log('reactive driven',this.course1.value)
  }

}
