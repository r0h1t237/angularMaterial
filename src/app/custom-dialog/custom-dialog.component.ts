import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css'
})
export class CustomDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(data, 'in dialog')
  }
}
