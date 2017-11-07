import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-qr-detail',
  templateUrl: 'qr-detail.html',
})
export class QrDetailPage {

  qrTypeData: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.qrTypeData = this.navParams.get("qrTypeData");
  }

  ionViewDidLoad() {
    console.log(this.qrTypeData);
  }

}
