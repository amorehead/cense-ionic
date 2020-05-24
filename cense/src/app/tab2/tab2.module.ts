import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule { }
