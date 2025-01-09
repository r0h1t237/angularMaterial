import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-mat-dialogbox',
  templateUrl: './mat-dialogbox.component.html',
  styleUrl: './mat-dialogbox.component.css'
})
export class MatDialogboxComponent {

  constructor(public dialog: MatDialog) { }

  openDialog1() {
    this.dialog.open(CustomDialogComponent);
  }

  openDialog2() {
    const dialogRef = this.dialog.open(CustomDialogComponent
      , {
        data: {
          title: 'Session timeout',
          titleAlign: 'center',
          content: 'You will be logged out due to inactivity',
          confirmTitle: 'Keep me logged in',
          confirmReturnValue: true,
          rejectTitle: 'Log out',
          rejectReturnValue: false,
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'after dialog closed')
    })
  }
}
