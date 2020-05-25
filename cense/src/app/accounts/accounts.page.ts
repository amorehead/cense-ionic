import { Component } from '@angular/core';
import { AccountService } from '../shared/account/account.service';
import { GridOptions, ColDef } from 'ag-grid-community';
import { IAccountData } from '../shared/account/account-data/iaccount-data';

@Component({
  selector: 'app-accounts',
  templateUrl: 'accounts.page.html',
  styleUrls: ['accounts.page.scss']
})
export class AccountsPage {
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
    const populatingSavingsAccount = columnIndex === 0
    let accountRow: IAccountData = {}

    // Ensure the user has already uploaded their accounts spreadsheet
    if (this.accountService.uploadedFile) {
      for (let i = 0; i < this.accountService.uploadedFile.length; i++) {
        const row = this.accountService.uploadedFile[i]
        if (row.length > 0) {
          if (typeof row[columnIndex] === 'string') {
            columnDefs.push({ headerName: row[columnIndex], field: `r${i + 1}:c${columnIndex}` })
          } else if (typeof row[columnIndex] === 'number') {
            accountRow[`r${i}:c${columnIndex}`] = row[columnIndex]
          }
        }
      }
      populatingSavingsAccount ? this.savingsRowData.push(accountRow) : this.checkingRowData.push(accountRow)
      this.accountService.userNeedsToUploadAccountsSpreadsheet = false
    } else this.accountService.userNeedsToUploadAccountsSpreadsheet = true

    return columnDefs
  }

  getCSVExportParams() {
    return {
      suppressQuotes: false,
      columnSeparator: 'tab',
      customHeader: null,
      customFooter: null,
    };
  }

  downloadDataAsCSV() {
    const params = this.getCSVExportParams()
    this.savingsGridOptions.api.getDataAsCsv(params)
  }
}
