import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  uploadedFile: any
  userNeedsToUploadAccountsSpreadsheet = false

  constructor() { }
}
