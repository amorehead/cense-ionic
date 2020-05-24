import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular'
import { AccountService } from '../services/account.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AgGridModule.withComponents([])
    ],
    exports: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [AccountService]
        }
    }
}