import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-detalle-tutoriales',
  templateUrl: 'detalle-tutoriales.html'
})
export class DetalleTutorialesPage {

  item;
  tutoriales=[];
  videoUrl: SafeResourceUrl;


  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public params: NavParams) {
    this.item = params.data.item;
    this.tutoriales = this.item.tutorialesCont;
    console.log(this.item);
    console.log(this.tutoriales);

    for (var x=0; x<this.tutoriales.length; x++){
        console.log(x);
        //console.log(this.tutoriales[x].link_tutorial);
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.tutoriales[x].link_tutorial);
        this.tutoriales[x].link_tutorial = this.videoUrl;
        console.log(this.videoUrl);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleTutorialesPage');
  }

}
