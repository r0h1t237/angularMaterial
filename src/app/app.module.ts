import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MatTypographyComponent } from './mat-typography/mat-typography.component';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import { MatIconComponent } from './mat-icon/mat-icon.component';
import { MatBadgesComponent } from './mat-badges/mat-badges.component';
import { MatProgressSpinnerComponent } from './mat-progress-spinner/mat-progress-spinner.component';
import { MatProgressBarComponent } from './mat-progress-bar/mat-progress-bar.component';
import { MatNavBarComponent } from './mat-nav-bar/mat-nav-bar.component';
import { MatSideNavComponent } from './mat-side-nav/mat-side-nav.component';
import { MatMenuComponent } from './mat-menu/mat-menu.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { MatDividerComponent } from './mat-divider/mat-divider.component';
import { MatGridComponent } from './mat-grid/mat-grid.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatTabComponent } from './mat-tab/mat-tab.component';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
import { MatInputComponent } from './mat-input/mat-input.component';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { MatAutocompleteComponent } from './mat-autocomplete/mat-autocomplete.component';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatRadioButtonComponent } from './mat-radio-button/mat-radio-button.component';
import { MatDatePickerComponent } from './mat-date-picker/mat-date-picker.component';
import { MatTooltipComponent } from './mat-tooltip/mat-tooltip.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { MatDialogboxComponent } from './mat-dialogbox/mat-dialogbox.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatVirtualScrollComponent } from './mat-virtual-scroll/mat-virtual-scroll.component';
@NgModule({
  declarations: [
    AppComponent,
    MatButtonComponent,
    MatTypographyComponent,
    MatButtonToggleComponent,
    MatIconComponent,
    MatBadgesComponent,
    MatProgressSpinnerComponent,
    MatProgressBarComponent,
    MatNavBarComponent,
    MatSideNavComponent,
    MatMenuComponent,
    MatListComponent,
    MatDividerComponent,
    MatGridComponent,
    MatExpansionPanelComponent,
    MatCardComponent,
    MatTabComponent,
    MatStepperComponent,
    MatInputComponent,
    MatSelectComponent,
    MatAutocompleteComponent,
    MatCheckboxComponent,
    MatRadioButtonComponent,
    MatDatePickerComponent,
    MatTooltipComponent,
    MatSnackbarComponent,
    CustomSnackbarComponent,
    MatDialogboxComponent,
    CustomDialogComponent,
    MatTableComponent,
    MatVirtualScrollComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
