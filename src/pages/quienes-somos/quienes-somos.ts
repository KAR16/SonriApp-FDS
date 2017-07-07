import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';

/*
  Generated class for the QuienesSomos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quienes-somos',
  templateUrl: 'quienes-somos.html'
})
export class QuienesSomosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public platform: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuienesSomosPage');
  }



  /*onDeviceReady() {

        let app="";

        // Don't forget to add the org.apache.cordova.device plugin!
        if(Device.platform === 'iOS') {
            app = 'twitter://';
        }
        else if(Device.platform === 'Android') {
            app = 'com.twitter.android';
        }

        AppAvailability.check(app)
          .then(
            (yes: string) => console.log(app + ' is available'),
            (no: string) => console.log(app + ' is NOT available')
        );

    }*/

}
