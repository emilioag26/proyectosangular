import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModssRoutingModule } from './modss-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModssRoutingModule,SharedModule
  ]
})
export class ModssModule { }
