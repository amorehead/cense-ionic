import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
