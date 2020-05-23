import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  storeData: any;
  csvData: any;
  jsonData: any;
  textData: any;
  htmlData: any;
  worksheet: any;

  constructor(public accountService: AccountService) { }

  ngOnInit() { }

  onFileChange(event: any) {
    /* Wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length > 1) throw new Error('Cannot use multiple files.');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* Read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* Grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* Save data */
      // this.accountService.uploadedFile = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.accountService.uploadedFile = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(target.files[0]);
    this.populateGridWithAccountsData()
  }

  populateGridWithAccountsData() {

  }

  saveAccountsDataToFile() {
    /* Generate worksheet */
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.accountService.uploadedFile);

    /* Generate workbook and add the worksheet */
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    /* Save to file */
    XLSX.writeFile(workbook, 'Accounts.xlsx');
  }
}
