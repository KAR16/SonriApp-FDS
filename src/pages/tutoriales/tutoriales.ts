import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleTutorialesPage } from '../detalle-tutoriales/detalle-tutoriales';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';



/*
  Generated class for the Tutoriales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutoriales',
  templateUrl: 'tutoriales.html'
})
export class TutorialesPage {
  herramientas=[];
  //videoUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
  //this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zDRMDrKpUIU?ecver=1');
  this.herramientas = [
    {
      'titulo': 'Globoflexia',
      'icono': 'assets/img/herramientas/globoflexia.png',
      'tutorialesCont' : [{
      'nombre_tutorial': 'perro',
      'imagen_tutorial': 'assets/img/card-amsterdam.png',
      'link_tutorial' : 'https://www.youtube.com/embed/zDRMDrKpUIU?ecver=1'
      },
      {
      'nombre_tutorial': 'espada',
      'imagen_tutorial': 'assets/img/card-madison.png',
      'link_tutorial' : 'https://www.youtube.com/embed/ZaGu7Wj41sQ?ecver=1'
      },
      {
      'nombre_tutorial': 'flor',
      'imagen_tutorial': 'assets/img/card-sf.png',
      'link_tutorial' : 'https://www.youtube.com/embed/G1zQQa_eZ7E?ecver=1'
      }]
    },
    {
      'titulo': 'Malabares',
      'icono': 'assets/img/herramientas/malabares.png',
      'tutorialesCont' : [{
      'nombre_tutorial': 'perro',
      'imagen_tutorial': 'assets/img/card-amsterdam.png',
      'link_tutorial' : 'https://www.youtube.com/embed/zDRMDrKpUIU?ecver=1'
      },
      {
      'nombre_tutorial': 'espada',
      'imagen_tutorial': 'assets/img/card-madison.png',
      'link_tutorial' : 'https://www.youtube.com/embed/ZaGu7Wj41sQ?ecver=1'
      },
      {
      'nombre_tutorial': 'flor',
      'imagen_tutorial': 'assets/img/card-sf.png',
      'link_tutorial' : 'https://www.youtube.com/embed/G1zQQa_eZ7E?ecver=1'
      }]
    },
    {
      'titulo': 'Papiroflexia',
      'icono': 'assets/img/herramientas/Papiroflexia.png',
      'tutorialesCont' : [{
      'nombre_tutorial': 'perro',
      'imagen_tutorial': 'assets/img/card-amsterdam.png',
      'link_tutorial' : 'https://www.youtube.com/embed/zDRMDrKpUIU?ecver=1'
      },
      {
      'nombre_tutorial': 'espada',
      'imagen_tutorial': 'assets/img/card-madison.png',
      'link_tutorial' : 'https://www.youtube.com/embed/ZaGu7Wj41sQ?ecver=1'
      },
      {
      'nombre_tutorial': 'flor',
      'imagen_tutorial': 'assets/img/card-sf.png',
      'link_tutorial' : 'https://www.youtube.com/embed/G1zQQa_eZ7E?ecver=1'
      }]
    },
    {
      'titulo': 'Pintacaritas',
      'icono': 'assets/img/herramientas/Pintacaritas.png',
      'tutorialesCont' : [{
      'nombre_tutorial': 'perro',
      'imagen_tutorial': 'assets/img/card-amsterdam.png',
      'link_tutorial' : 'https://www.youtube.com/embed/zDRMDrKpUIU?ecver=1'
      },
      {
      'nombre_tutorial': 'espada',
      'imagen_tutorial': 'assets/img/card-madison.png',
      'link_tutorial' : 'https://www.youtube.com/embed/ZaGu7Wj41sQ?ecver=1'
      },
      {
      'nombre_tutorial': 'flor',
      'imagen_tutorial': 'assets/img/card-sf.png',
      'link_tutorial' : 'https://www.youtube.com/embed/G1zQQa_eZ7E?ecver=1'
      }]
    }
  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialesPage');
  }

  //Mando el arreglo de las constelaciones a la vista del detalle de cada una
  detalleTutoriales(item) {
    //this.navCtrl.push(ConstelacionesPage);
    this.navCtrl.push(DetalleTutorialesPage, {item:item});
  }

}
