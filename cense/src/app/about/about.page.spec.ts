import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SpreadsheetContainerComponentModule } from '../spreadsheet-container/spreadsheet-container.module';

import { AboutPage } from './about.page';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [IonicModule.forRoot(), SpreadsheetContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
