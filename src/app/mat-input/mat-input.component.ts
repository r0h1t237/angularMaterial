import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrl: './mat-input.component.css'
})
export class MatInputComponent {

  userName='rohit'

  uname=''

  constructor(private fb:FormBuilder){}

  loginForm=this.fb.group({
    "email": ["", Validators.required],
    "pwd":["", Validators.required]
});

  verify(formValue:any){
    console.log(formValue)
       if(this.uname){
        console.log("Valid uname")
       }
       else
       console.log('Invalid uname')
  }


  onSubmit(){

  }

}
