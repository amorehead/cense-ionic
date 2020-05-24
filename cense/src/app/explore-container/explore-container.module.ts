import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    SharedModule
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule { }
