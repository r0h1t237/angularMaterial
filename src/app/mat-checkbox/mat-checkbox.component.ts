import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mat-checkbox',
  templateUrl: './mat-checkbox.component.html',
  styleUrl: './mat-checkbox.component.css'
})
export class MatCheckboxComponent {
checkVariable=true
  constructor(private fb : FormBuilder){

  }
loginForm=this.fb.group({
  gender:this.fb.group({
    male:false,
    female:false,
    other:false,
 })
})
  
status(e:any,f:any){
console.log(e,f)
}

  onSubmit(){
    console.log(this.loginForm.value)
  }

  onSubmit1(formData:any){
    console.log(formData)
  }

}
