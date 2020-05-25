import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { SpreadsheetContainerComponentModule } from '../spreadsheet-container/spreadsheet-container.module';

import { AboutPageRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    SpreadsheetContainerComponentModule,
    AboutPageRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule { }
