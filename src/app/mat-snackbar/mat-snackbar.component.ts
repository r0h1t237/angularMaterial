import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styleUrl: './mat-snackbar.component.css'
})
export class MatSnackbarComponent {
  constructor(private snackBar: MatSnackBar) {

  }
  openSnackBar1(message: any) {
    console.log(message)
    this.snackBar.open(message)

  }
  openSnackBar2(message: any, dismiss?: any) {
    let sneackBarRef = this.snackBar.open(message, dismiss)

    sneackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar waw dismissed.')
    })

    sneackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered.')
    })
  }

  openSnackBar3(message: string, dismiss?: string, duration?: number) {
    this.snackBar.open(message, dismiss, { duration: duration })
  }

  openSnackBar4(message: string, dismiss?: string, duration?: number) {
    this.snackBar.open(message, dismiss, {
      duration: duration, horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  customSnackBar1() {
    this.snackBar.openFromComponent(CustomSnackbarComponent)
  }
  customSnackBar2() {
    this.snackBar.openFromComponent(CustomSnackbarComponent, { data: { message: 'hi', actionName: 'name' }, duration: 3000 })
  }
}
