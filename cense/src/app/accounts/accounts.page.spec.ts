import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SpreadsheetContainerComponentModule } from '../spreadsheet-container/spreadsheet-container.module';

import { AccountsPage } from './accounts.page';

describe('AccountsPage', () => {
  let component: AccountsPage;
  let fixture: ComponentFixture<AccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsPage],
      imports: [IonicModule.forRoot(), SpreadsheetContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
