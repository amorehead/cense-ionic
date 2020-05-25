import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountsPage } from './accounts.page';
import { SpreadsheetContainerComponentModule } from '../spreadsheet-container/spreadsheet-container.module';

import { AccountsPageRoutingModule } from './accounts-routing.module'
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SpreadsheetContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AccountsPage }]),
    AccountsPageRoutingModule,
    AgGridModule,
    SharedModule
  ],
  declarations: [AccountsPage]
})
export class AccountsPageModule { }
