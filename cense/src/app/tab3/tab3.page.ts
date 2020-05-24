import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { GridOptions, ColDef } from 'ag-grid-community';
import { IAccountData } from '../shared/account/account-data/iaccount-data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  savingsRowData: Array<IAccountData> = []
  checkingRowData: Array<IAccountData> = []

  savingsGridOptions: GridOptions = {
    columnDefs: this.getColumnDefs(0)
  }

  checkingGridOptions: GridOptions = {
    columnDefs: this.getColumnDefs(2)
  }

  constructor(public accountService: AccountService) { }

  getColumnDefs(columnIndex: number): Array<ColDef> {
    const columnDefs = []

    for (let i = 0; i < this.accountService.uploadedFile.length; i++) {
      const row = this.accountService.uploadedFile[i]
      if (row.length > 0) {
        if (typeof row[columnIndex] === 'string') {
          columnDefs.push({ headerName: row[columnIndex], field: 'value' })
        } else if (typeof row[columnIndex] === 'number') {
          columnIndex === 0 ? this.savingsRowData.push({ value: row[columnIndex] }) : this.checkingRowData.push({ value: row[columnIndex] })
        }
      }
    }

    return columnDefs
  }
}
