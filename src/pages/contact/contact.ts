import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrDetailPage } from '../qr-detail/qr-detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  qrTypes:Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.qrTypes = [
      {
        id:'',
        type:'URL web',
        content:[
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          },
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          }
        ]
      },
      {
        id:'',
        type:'Imagen',
          content:[
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          },
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          }
        ]
      },
      {
        id:'',
        type:'E-mail',
          content:[
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          },
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          }
        ]
      },
      {
        id:'',
        type:'PDF',
          content:[
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          },
          {
            ext:40,
            ce:10,
            num:10,
            let:10
          }
        ]
      }
    ];

  }
  showQrDetail = function(type:Object){
    this.navCtrl.push(QrDetailPage,{
      qrTypeData: type
    });
  }

}
