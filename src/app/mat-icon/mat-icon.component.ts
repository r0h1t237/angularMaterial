import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const THUMB_UP = `
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
</svg>
`;

@Component({
  selector: 'app-mat-icon',
  templateUrl: './mat-icon.component.html',
  styleUrl: './mat-icon.component.css',
})
export class MatIconComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
   
    this.matIconRegistry.addSvgIcon('heart', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/heart.svg'))
    
    this.matIconRegistry.addSvgIcon('heartThin', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/heart-thin-icon.svg'))

    this.matIconRegistry.addSvgIconLiteral('thumb-up', this.domSanitizer.bypassSecurityTrustHtml(THUMB_UP));
  }


}


