import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstelacionesPage } from '../constelaciones/constelaciones';

/*
  Generated class for the DetalleConstelaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-constelaciones',
  templateUrl: 'detalle-constelaciones.html'
})
export class DetalleConstelacionesPage {
  /*Inicializamos el segment de biografía en la vista detalle-constelaciones*/
  info: string = "biografia";
  item;
  redesSociales=[];

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.data.item;
    this.redesSociales = this.item.redes;
    console.log(this.item);
    console.log(this.redesSociales);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleConstelacionesPage');
  }


  openPage(redSocial){
    console.log("Entré a la función");
    if(redSocial.nombre_red === "facebook"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
      console.log("Mandé fb");
    }
    else if(redSocial.nombre_red === "twitter"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
      console.log("Mandé tw");
    }
    else if(redSocial.nombre_red === "instagram"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
      console.log("Mandé inst");
    }
    else if(redSocial.nombre_red === "youtube"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
      console.log("Mandé yb");
    }
    else if(redSocial.nombre_red === "sitio"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
      console.log("Mandé yb");
    }
  }

  openSite(){
    window.open('http://desonrisas.org/', '_blank', 'location=yes');
  }

  openYoutube(){
    window.open('https://www.youtube.com/user/FDSGuatemala', '_blank', 'location=yes');
  }

  backPage(){
    this.navCtrl.push(ConstelacionesPage);
  }

}
