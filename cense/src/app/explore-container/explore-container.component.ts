import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AccountService } from '../shared/account/account.service';

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
    this.checkForUploadedAccounts()
  }

  checkForUploadedAccounts() {
    this.accountService.uploadedFile ? this.accountService.userNeedsToUploadAccountsSpreadsheet = false : this.accountService.userNeedsToUploadAccountsSpreadsheet = true
  }
}
