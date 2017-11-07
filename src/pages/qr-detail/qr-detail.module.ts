import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrDetailPage } from './qr-detail';

@NgModule({
  declarations: [
    QrDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QrDetailPage),
  ],
})
export class QrDetailPageModule {}
