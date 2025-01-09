import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgModel, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-mat-autocomplete',
  templateUrl: './mat-autocomplete.component.html',
  styleUrl: './mat-autocomplete.component.css'
})
export class MatAutocompleteComponent implements OnInit, AfterViewInit {

  @ViewChild('course1') course1!: NgModel;

  options: string[] = ['Angular', 'React', 'Vue'];

  objOptions = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vue' }
  ]


  filteredOptions1!: Observable<string[]> | undefined;
  filteredOptions2!: Observable<string[]>;

  // myControl = new FormControl('');

  courseForm2=this.fb.group({
    "course2": ["", Validators.required],
});

constructor(private fb:FormBuilder,private changeDetectorRef: ChangeDetectorRef){
  
}

  
  ngOnInit(): void {
    this.filteredOptions2 = this.courseForm2.controls['course2'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    


  }

  ngAfterViewInit(): void {
 

    // opiton 1 for ng0100 error
    
    setTimeout(()=>{
    this.filteredOptions1 = this.course1?.valueChanges?.pipe(
      startWith(''),
      map((val:string) =>  this._filter(val || ''))
    )

  })
    // opiton 2 for ng0100 error
    // this.filteredOptions1 = this.course1?.valueChanges?.pipe(
    //   startWith(''),
    //   map((val:string) =>  this._filter(val || ''))
    // )
    // this.changeDetectorRef.detectChanges();
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }



  displayFn(subject: any) {
    // console.log(JSON.stringify(subject))
    return subject && subject.name ? subject.name : '';
  }


}
