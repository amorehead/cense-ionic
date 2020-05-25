import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { SpreadsheetContainerComponentModule } from '../spreadsheet-container/spreadsheet-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    SpreadsheetContainerComponentModule,
    HomePageRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
