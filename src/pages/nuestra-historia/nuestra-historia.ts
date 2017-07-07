import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { InicioPage } from '..//inicio/inicio';

/*
  Generated class for the NuestraHistoria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nuestra-historia',
  templateUrl: 'nuestra-historia.html'
})
export class NuestraHistoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuestraHistoriaPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


}
