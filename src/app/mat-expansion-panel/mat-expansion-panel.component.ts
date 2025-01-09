import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrl: './mat-expansion-panel.component.css'
})
export class MatExpansionPanelComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  isOpen = false
  step = -1;

  expand() {   
    this.isOpen = !this.isOpen
    this.accordion.openAll()
    this.setStep(this.step)
  }

  collapse() {
    this.setStep(-1)
    this.isOpen = !this.isOpen
    this.accordion.closeAll()
  }



  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
