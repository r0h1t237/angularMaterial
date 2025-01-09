import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-mat-date-picker',
  templateUrl: './mat-date-picker.component.html',
  styleUrl: './mat-date-picker.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MatDatePickerComponent {
  minDate = new Date();
  maxDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7)

  dateForm=this.fb.group({
    "date": ["", Validators.required],
    
});

constructor(private fb :FormBuilder){
  
}

  
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      // console.log('inside view')
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : 'normal';
    }

    return 'normal';
  };

  dateFilter = (date: any) => {
    const day = date?.getDay()
    return day !== 0 && day !== 6;
  }

  log(formData:any){
    console.log(formData,'logging formData')
  }

  onSubmit(){
    console.log("model form",this.dateForm.value)
  }


}
