import { Component ,ViewEncapsulation} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrl: './mat-select.component.css',
  encapsulation:ViewEncapsulation.None
})
export class MatSelectComponent {
selectedValue1='react'
selectedValue2=''
selectedValue3=''
selectedValue4=''

genderForm2=this.fb.group({
  "gender": ["", Validators.required],
});

constructor(private fb:FormBuilder){

}

verifyGender(form:any){
  console.log(form.value)
  form.resetForm()
}

onSubmit(){
  console.log(this.genderForm2.value)
}

log(event:any){
  console.log('selected technology by user is ',event.value)
}

}
