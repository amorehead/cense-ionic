import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SpreadsheetContainerComponent } from './spreadsheet-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    SharedModule
  ],
  declarations: [SpreadsheetContainerComponent],
  exports: [SpreadsheetContainerComponent]
})
export class SpreadsheetContainerComponentModule { }
