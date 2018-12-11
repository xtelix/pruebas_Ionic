import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransicionesPage } from './transiciones';

@NgModule({
  declarations: [
    TransicionesPage,
  ],
  imports: [
    IonicPageModule.forChild(TransicionesPage),
  ],
})
export class TransicionesPageModule {}
