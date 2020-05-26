import { Component } from '@angular/core';
import { AccountService } from '../shared/account/account.service';
import { GridOptions, ColDef } from 'ag-grid-community';
import { ILooseType } from '../shared/iloose-type';

@Component({
  selector: 'app-accounts',
  templateUrl: 'accounts.page.html',
  styleUrls: ['accounts.page.scss']
})
export class AccountsPage {
  accountsRowData: Array<ILooseType> = []

  gridOptions: GridOptions = {
    columnDefs: this.getColumnDefsAndStoreAccountsRowData(),
    suppressColumnVirtualisation: true,
    onGridReady: () => this.autoSizeAllColumns()
  }

  constructor(public accountService: AccountService) { }

  getColumnDefsAndStoreAccountsRowData(): Array<ColDef> {
    const columnDefs = []
    let columnDefsCollected = false

    // Ensure the user has already uploaded their accounts spreadsheet
    if (this.accountService.uploadedFile) {
      const accountRows = this.accountService.uploadedFile.filter((accountRow: ILooseType) => accountRow.length > 0) // Only parse populated rows
      for (let rowIndex = 0; rowIndex < accountRows.length; rowIndex++) {
        const parsedRow = this.accountService.uploadedFile[rowIndex]
        const gridRow: ILooseType = {}
        for (let columnIndex = 0; columnIndex < parsedRow.length; columnIndex++) {
          if (!columnDefsCollected) {
            // Establish column definition for each grid field value
            if (columnIndex === 0) columnDefs.push({ headerName: `Account Type`, field: `c${columnIndex}` })
            else if (columnIndex === 1) columnDefs.push({ headerName: `Last Update`, field: `c${columnIndex}` })
            else if (typeof parsedRow[columnIndex] === 'string') {
              if (parsedRow[columnIndex].toLowerCase().includes('ratios')) columnDefs.push({ headerName: `Reminder`, field: `c${columnIndex}` })
              else columnDefs.push({ headerName: `Category ${Math.round((columnIndex / 2))}`, field: `c${columnIndex}` })
            }
            else if (typeof parsedRow[columnIndex] === 'number') columnDefs.push({ headerName: `Category ${Math.round((columnIndex / 2)) - 1} Value`, field: `c${columnIndex}` })
          }

          // Map parsed row field values into unique, key-value grid field values
          gridRow[`c${columnIndex}`] = parsedRow[columnIndex]
        }
        this.accountsRowData.push(gridRow)
        columnDefsCollected = true
      }

      this.accountService.userNeedsToUploadAccountsSpreadsheet = false
    } else this.accountService.userNeedsToUploadAccountsSpreadsheet = true

    return columnDefs
  }

  autoSizeAllColumns(skipHeader?: boolean) {
    const allColumnIds: Array<any> = []
    this.gridOptions.columnApi.getAllColumns().forEach(column => allColumnIds.push(column['colId']))
    this.gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader)
  }

  getCSVExportParams() {
    // Establish desired CSV export param(s)
    return {
      fileName: 'Accounts.csv'
    }
  }

  downloadDataAsCSV() {
    const params = this.getCSVExportParams()
    this.gridOptions.api.exportDataAsCsv(params)
  }
}
