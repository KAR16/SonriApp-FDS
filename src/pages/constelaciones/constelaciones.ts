import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleConstelacionesPage } from '../detalle-constelaciones/detalle-constelaciones';

@Component({
  selector: 'page-constelaciones',
  templateUrl: 'constelaciones.html'
})
export class ConstelacionesPage {

  constelaciones=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.constelaciones = [
    {
      'nombre_const': 'Draco',
      'img_const': 'assets/img/sedes/draco.png',
      'color_const': 'Rojo',
      'cod_color': 'draco',
      'nacimiento': 'Junio 2009',
      'fecha': new Date(2009, 5, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [
      {
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Dragón',
      'nombre_mascota': 'Drake',
      'img_mascota': 'assets/img/mascotas/drake.png',
      'lema': 'Vibra positiva',
      'historia': '<p>Estando reunidos en la primera sede de Fábrica de Sonrisas, por el crecimiento que estaba teniendo el grupo de voluntarios deciden crear “Constelaciones”. Los voluntarios de ese momento fueron separados en grupos y quedaron juntos la Dra. Colores, el Dr. Nano y la Dra. Mica, cuando les dijeron que pensaran en un nombre para su grupo, los tres coincidieron en el dragón, porque sería una buena forma de representar la fuerza del espíritu, convirtiéndose así en la “Constelación Draco”, la que se distinguía por su alegría y buena onda entre ellos. Surgiendo por eso su lema “Vibra Positiva”. Tres días después de nacer la constelación, nació también la mascota: Drake.<br><br>En principio las playeras de la constelación representaban la cola de Drake, pero posteriormente, cuando la payaescuela empezó a realizarse en el parque la Democracia, la constelación se albergó cerca de uno de los árboles, al que nosotros le llamamos árbol de la sabiduría, volviéndose parte importante de la historia de la constelación a tal punto que este aparece en los diseños de las playeras que la representaban. Su primer director fue el Dr. Fantasía.</p>'
    },
    {
      'nombre_const': 'Fénix',
      'img_const': 'assets/img/sedes/fenix.png',
      'color_const': 'Amarillo',
      'cod_color': '#FFFF38',
      'nacimiento': 'Junio 2009',
      'fecha': new Date(2009, 5, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Fénix',
      'nombre_mascota': 'Flamito',
      'img_mascota': 'assets/img/mascotas/flamito.png',
      'lema': 'Tengo el corazón de fuego y creo en los sueños',
      'historia': '<p>La constelación de Fénix nace en la 4ta generación junto a Draco y Unicornio, cada una de ellas es representada por una linda y mágica mascota. Fénix se rige con el lema “Tengo el corazón de fuego y creo en los sueños”, su mascota es un ave fénix llamada Flamito.<br><br>Flamito nace en lo más profundo de la selva amazónica, donde hay diversidad de criaturas místicas, donde ningún ser humano ha podido llegar, se dice que en el árbol del bien y del mal, floreció un arbusto de rosas, junto a la primera Rosa nació un pájaro de un bello plumaje y un canto incomparable. Un día cayó una lluvia de meteoritos, cayendo uno sobre aquel nido y mágicamente aquel pájaro ardió en llamas y resurgió de las cenizas para convertirse en una nueva criatura llamada Flamito.</p>'
    },
    {
      'nombre_const': 'Unicornio',
      'img_const': 'assets/img/sedes/unicornio.png',
      'color_const': 'Turquesa',
      'cod_color': '#03FFFE',
      'nacimiento': 'Junio 2009',
      'fecha': new Date(2009, 5, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Unicornio',
      'nombre_mascota': 'Chuby',
      'img_mascota': 'assets/img/mascotas/chuby.png',
      'lema': 'La imaginación es el límite',
      'historia': '<p>Creada en el año 2009, por el crecimiento radical que Fábrica de Sonrisas tuvo durante la tercera generación y forma parte de las tres primeras constelaciones. Se le nombro Unicornio ya que este simboliza la pureza. Generalmente los unicornios viven en el bosque o jardines, por ello la primera payaescuela impartida en esta Constelación se desarrolló en un lugar rodeado de árboles y vegetación al que llamaban “Valle de Unicornio”. Su mascota es Chuby, un tierno unicornio fabuloso de naturaleza honrosa y pura. El lema de constelación es “la imaginación es el Limite”.</p>'
    },
    {
      'nombre_const': 'Camaleón',
      'img_const': 'assets/img/sedes/camaleon.png',
      'color_const': 'Blanco',
      'cod_color': '#FFF',
      'nacimiento': 'Julio 2011',
      'fecha': new Date(2011, 6, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Camaleón',
      'nombre_mascota': 'Duf',
      'img_mascota': 'assets/img/mascotas/duf.png',
      'lema': '-',
      'historia': '<p>Nace en la octava generación, debido a que hasta ese momento las payaescuelas se realizaban solo los días sábados y Fábrica de Sonrisas deseaba dar una oportunidad a todos aquellos que quisieran participar el día Domingo, sus primeros coordinadores fueron la Dra. Tortolita y el Dr. Rockstar. Esta constelación está formada por tres estrellas, muy brillantes, de color amarillo, rojo y azul que representan la unión de 3 constelaciones en una sola.<br><br>Su mascota es un pequeño camaleón verde con muchos colores que se adapta a su entorno rápidamente, sin embargo, nunca deja su esencia o sus buenos sentimientos atrás. Su nombre es Duf debido a la unión de las iniciales de las primeras constelaciones de Fábrica de Sonrisas, Draco, Unicornio y Fénix, el color que representa a la constelación es el blanco por su pureza.</p>'
    },
    {
      'nombre_const': 'Batz',
      'img_const': 'assets/img/sedes/batz.png',
      'color_const': 'Café',
      'cod_color': '#4F2B15',
      'nacimiento': 'Julio 2011',
      'fecha': new Date(2011, 6, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Mono',
      'nombre_mascota': 'Wirik',
      'img_mascota': 'assets/img/mascotas/wirik.png',
      'lema': 'Tu eres el inicio de tus sueños y el límite de tu destino',
      'historia': '<p>Surge con el nacimiento de la payaescuela de día domingo por la mañana, en la octava generación en el año 2011, debido a que la respuesta de los voluntarios fue extraordinaria, viéndose en la necesidad de crear una nueva constelación, Batz, que tuvo un nacimiento corrido pero lleno de energía como su guardián Wirik, cuyo significado es cazador de sueños y es un simpático monito que siempre tiene una sonrisa para dar.</p>'
    },
    {
      'nombre_const': 'Ursus',
      'img_const': 'assets/img/sedes/ursus.png',
      'color_const': 'Azul Marino',
      'cod_color': '#000022',
      'nacimiento': 'Enero 2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Osa',
      'nombre_mascota': 'Nuru',
      'img_mascota': 'assets/img/mascotas/nuru.png',
      'lema': 'La fuerza sale del corazón',
      'historia': '<p>Ursus Minor es la última constelación que nace en Fábrica de Sonrisas sede central, en el año 2013. Para dar cabida a un nuevo horario de payaescuela. Su mascota es Nuru, una pequeña osa llena de valor y poderes especiales, que representa fuerza interior, sabiduría e intuición.<br><br> La estrella más conocida de esta constelación es la estrella del norte, que permanece casi fija en el cielo, y ha servido de guía a miles de navegantes, por lo que Nuru, la lleva en su mano, recordándonos que somos una luz en el camino de otros. Utilizando el lema “La fuerza sale del corazón”, su color es el azul marino.</p>'
    },
    {
      'nombre_const': 'Crux del Sur',
      'img_const': 'assets/img/sedes/crux_del_sur.png',
      'color_const': 'Verde Grama',
      'cod_color': '#008804',
      'nacimiento': '2009',
      'fecha': new Date(2009, 0, 1),
      'sede': 'Coatepeque, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Culebra',
      'nombre_mascota': 'Cruxito',
      'img_mascota': 'assets/img/mascotas/cruxito.png',
      'lema': 'El amor nos une',
      'historia': '<p>Esta constelación inició con el sueño de Julio Roberto Maldonado, Dr. Jirafita quien anteriormente había participado en un taller de Fábrica de Sonrisas en Guatemala. Al recibir dicho taller Julio Roberto quedo entusiasmado así que contacto a varios amigos y a Andrés Ruiz uno de los fundadores de Fábrica de Sonrisas sede central, para poder llevar este proyecto a Coatepeque y así mes con mes un grupo viajaba para lograr que en la primera generación se graduaran 19 voluntarios.<br><br>Crux del Sur está formada por cuatro estrellas, cada una de ellas representa a uno de los fundadores de la Asociación que se acercó por primera vez a Coatepeque, además su ubicación está al sur como este municipio y su constelación vecina es Orión, nombre de la constelación que había nacido anteriormente en El Salvador lo que hacía más especial a la misma.<br><br>Su mascota es una serpiente llamada Cruxito, que representa a Coatepeque ya que viene del vocablo Coaltepec cuyo significado es cerro de serpientes, su color es rojo porque representa el amor por el prójimo. Y su lema es “El amor nos une.</p>'
    },
    {
      'nombre_const': 'Orión',
      'img_const': 'assets/img/sedes/orion.png',
      'color_const': 'Naranja',
      'cod_color': '#FF7900',
      'nacimiento': '2009',
      'fecha': new Date(2009, 0, 1),
      'sede': 'San Salvador, El Salvador',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Niño',
      'nombre_mascota': 'Regil',
      'img_mascota': 'assets/img/mascotas/regil.png',
      'lema': 'Orión ilumina con sonrisas tu corazón',
      'historia': '<p>En la mitología griega se asocia a Orión con El Cazador. En la realidad actual de San Salvador no es un cazador mitológico, sino un cazador real, verdadero, y cien por ciento humano. Será el responsable de cazar llantos, tristezas, desgracias, miserias, utilizando su mejor arma y la más poderosa de todas, su sonrisa. Orión con su audacia y tenacidad, cazará todo lo malo, para que haya espacio para todo lo bueno. Esta constelación está formada por una legión de cazadores que terminaran con el odio, para que prevalezca el amor. Orión, el Cazador Gigante o el Guerrero, era un gigante tan alto que podía atravesar caminando cualquier mar, esa grandeza se tiene que ver reflejada en su gran corazón. El nombre de su guerrero gigantes es Rigel, como la estrella más brillante de esta constelación, el color con el que se identifica a la constelación es el naranja.</p>'
    },
    {
      'nombre_const': 'Pegasus',
      'img_const': 'assets/img/sedes/pegasus.png',
      'color_const': 'Gris',
      'cod_color': '#959595',
      'nacimiento': 'Junio 2010',
      'fecha': new Date(2010, 5, 1),
      'sede': 'Jalapa, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Pegaso',
      'nombre_mascota': 'Ras',
      'img_mascota': 'assets/img/mascotas/ras.png',
      'lema': 'Dejando huellas de amor',
      'historia': '<p>La constelación nace por el Dr. Puppy y la Dra. Robotina dos voluntarias que se gradúan en el 2009 de la cuarta generación de Fábrica de Sonrisas Guatemala, ellos son los que gestionan crear el proyecto en el departamento de Jalapa, la primera convocatoria es el 24 de abril del 2010.<br><br>Naciendo con el nombre de Pegasus, el color con el cual se identifican es el gris, la mascota es un Pegaso llamado Ras y su nombre significa guía, jefe o cabeza en un idioma de Etiopía (los colores de la bandera de Jalapa son verde, amarillo y rojo, sus colores se asemejan a los de Etiopía)<br>El lema es: Dejando huellas de amor, el cuál se elige porque según la leyenda dónde un Pegaso caminaba brotaba agua.</p>'
    },
    {
      'nombre_const': 'Balam',
      'img_const': 'assets/img/sedes/balam.png',
      'color_const': 'Morado',
      'cod_color': '#B500BC',
      'nacimiento': 'Noviembre 2010',
      'fecha': new Date(2010, 10, 1),
      'sede': 'Quetzaltenango, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.xela/'
      }],
      'mascota': 'Jaguar',
      'nombre_mascota': 'Kawi',
      'img_mascota': 'assets/img/mascotas/kawi.png',
      'lema': 'Dejando huella',
      'historia': '<p>Fábrica de Sonrisas Quetzaltenango se funda el 14 de agosto de 2010, día en que se llevó a cabo su primera convocatoria, el proceso de formación fue impartido por 17 doctores originarios de Guatemala y Coatepeque. Su aniversario se celebra el 28 de noviembre, fecha en la cual se graduó la primera generación.<br><br>Balam, es una de las constelaciones reconocidas por la cultura maya y su nombre significa “Jaguar”, el cual es un animal sagrado y el más representativo para nuestros ancestros.  Somos jaguares sonrientes y nocturnos, nacidos bajo la luna que nos ilumina y cuida, esa luna que nos recuerda que somos estrellas con luz propia que ve la vida de manera positiva.<br><br>La constelación Balam nace, con Jaguares comprometidos a cambiar la vida de las personas a las que visitan, cambiando de uno en uno el mundo, haciendo de la sonrisa la mejor medicina para el alma y el corazón.<br><br>“KAWI” es el nombre del pequeño jaguar mascota. “Kawi” era un término con el que los antiguos mayas denominaban a sus guías y acompañantes. ¡Este pequeño amiguito nació para acompañar y guiar a la gente de buen corazón! El lema con el cual se identifican los voluntarios de Quetzaltenango es “Dejamos huella”.</p>'
    },
    {
      'nombre_const': 'Leo',
      'img_const': 'assets/img/sedes/leo.png',
      'color_const': 'Verde fosforecente',
      'cod_color': '#12FF01',
      'nacimiento': 'Marzo 2011',
      'fecha': new Date(2011, 2, 1),
      'sede': 'Chiquimula, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.chiquimula/'
      }],
      'mascota': 'León',
      'nombre_mascota': 'Leonardo',
      'img_mascota': 'assets/img/mascotas/leo.png',
      'lema': 'La risa es algo serio',
      'historia': '<p>Fábrica de Sonrisas Chiquimula nació en marzo de 2011, se llama así debido a que es la constelación que tiene las estrellas más brillantes, actualmente hay 7 generaciones. La primera generación graduó a 44 doctores, el color de Leo es verde Neon debido a que brilla en la oscuridad, su mascota se llama Leonardo que es un león muy simpático. El lema con el que se identifican los voluntarios de Chiquimula es “La risa… es algo serio”.</p>'
    },
    {
      'nombre_const': 'Áquila',
      'img_const': 'assets/img/sedes/aquila.png',
      'color_const': 'Negro',
      'cod_color': '#323232',
      'nacimiento': 'Junio 2011',
      'fecha': new Date(2011, 5, 1),
      'sede': 'Cobán, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.coban/'
      }],
      'mascota': 'Aguila',
      'nombre_mascota': 'Chahim',
      'img_mascota': 'assets/img/mascotas/chahim.png',
      'lema': 'La sonrisa y la alegría es nuestro idioma universal',
      'historia': '<p>Fábrica de Sonrisas Cobán nació en junio del año 2011, el nombre de esta constelación es Áquila, inspirados en el proceso que sufre a cierta edad el águila, en la que se renueva por 5 meses, en este proceso el águila debe romperse las garras, el pico y quitarse las plumas para reconstruirse con una vida nueva coincidiendo con el tiempo de formación de nuestros voluntarios.<br><br>El lema con el que se identifican los voluntarios de Cobán es “La Sonrisas y La Alegría, Nuestro Idioma Universal”. La mascota lleva por nombre Chaim, que en Q’eqchi’ significa estrella, nosotros como voluntarios subimos como estrellas hacia una constelación. </p>'
    },
    {
      'nombre_const': 'Picis',
      'img_const': 'assets/img/sedes/picis.png',
      'color_const': 'Aqua',
      'cod_color': '#00F1C6',
      'nacimiento': 'Marzo 2012',
      'fecha': new Date(2012, 2, 31),
      'sede': 'Zacapa, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.zacapa/'
      }],
      'mascota': 'Delfines',
      'nombre_mascota': 'Sonri y Sueños',
      'img_mascota': 'assets/img/mascotas/sonri_sueños.png',
      'lema': 'De los amigos siempre cerca',
      'historia': '<p>Nace el 31 de marzo de 2012, con la graduación de la primera generación de voluntarios. Las mascotas de Piscis son dos amigos delfines, uno llamado “Sonri” y el otro llamado “Sueños”, que son de personalidades amables e intuitivas, les gusta perderse en el misterio y el ridículo para sonreír y soñar, son sensibles a los sentimientos de los demás y muy simpáticos. El lema con el que se identifica esta constelación es “De los amigos siempre cerca”.</p>'
    },
    {
      'nombre_const': 'Taurus',
      'img_const': 'assets/img/sedes/taurus.png',
      'color_const': 'Fucsia',
      'cod_color': '#FF00C0',
      'nacimiento': 'Mayo 2012',
      'fecha': new Date(2012, 4, 1),
      'sede': 'Retalhuleu, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.reu/'
      }],
      'mascota': 'Toro',
      'nombre_mascota': 'Torivio',
      'img_mascota': 'assets/img/mascotas/torivio.png',
      'lema': 'Una embestida de amor',
      'historia': '<p>En el 2012 empezó el sueño de la primera convocatoria, que fue realizada el 15 de abril en el departamento de Retalhuleu. El 21 de abril inició el proceso de formación para los nuevos voluntarios de Retalhuleu, el mismo día que el calendario astrológico marca el inicio de la constelación Taurus, durante este proceso los voluntarios no encontraron amigos, encontraron familia.<br><br>Los voluntarios que participaron en la formación estaban llenos de energía, expresividad y vida, igual que el color fucsia, color que los representa, el grupo de voluntarios se dividió en 4 grupos, que fueron parte importante del proceso, así como las 4 estrellas más importantes que forman la constelación Taurus.<br><br>El proceso de formación finalizó el día 20 de mayo, coincidentemente el mismo día que el calendario astrológico marca el final de la constelación Taurus, una nueva constelación había nacido en el universo de Fábrica de Sonrisas, con voluntarios llenos de amor, dispuestos a embestir de sonrisas nuestro camino, tal como lo haría Toribio su mascota.<br><br>El nombre de la mascota se dio por el ganado de esa época, las cuatro estrellas que tiene en su pañuelo representan los 4 grupos que se formaron durante el proceso de formación de la primera generación de voluntarios de Fábrica de Sonrisas en Retalhuleu. Su lema es “Una embestida de amor”.</p>'
    },
    {
      'nombre_const': 'Keh',
      'img_const': 'assets/img/sedes/keh.png',
      'color_const': 'Beige',
      'cod_color': '#E3A745',
      'nacimiento': 'Febrero 2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Mazatenango, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Venado',
      'nombre_mascota': 'Venadin',
      'img_mascota': 'assets/img/mascotas/venadin.png',
      'lema': 'Un salto de amor y felicidad',
      'historia': '<p>Fábrica de Sonrisas Mazatenango en Suchitepéquez nace en febrero del año 2013, su nombre es Constelación Keh, es la pronunciación del nahual venado, que es el símbolo departamental de este bello lugar. Su mascota es un venado llamado Venadino, el color que lo representa es el beige. Su lema es “Un salto de amor y felicidad”.</p>'
    },
    {
      'nombre_const': 'Cisne',
      'img_const': 'assets/img/sedes/cisne.png',
      'color_const': 'Rosado',
      'cod_color': '#FF84BD',
      'nacimiento': '2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Santa Ana, El Salvador',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.sta.ana.sv/'
      }],
      'mascota': 'Cisne',
      'nombre_mascota': 'Whip',
      'img_mascota': 'assets/img/mascotas/whip.png',
      'lema': 'Sonreimos con pasión para alegrar tu corazón',
      'historia': '<p>Está expansión de Fábrica de Sonrisas San Salvador a Santa Ana, se realizó en el año 2013 graduando 5 doctores, actualmente consta de 29 doctores graduados y 5 generaciones comprometidas con cambiar al mundo una persona a la vez.<br>Para los antiguos griegos, la constelación del Cisne estaba relacionada con el mito de Zeus y la diosa Némesis quien, para escapar de este se transformaba en diferentes animales. Para todos los miembros de esta constelación, la transformación será la herramienta principal para acabar con todas las lágrimas, miedo, debilidad, enojo, soledad y todo aquello que evita que el amor y la alegría habiten en los corazones de las personas. Transformándonos en nuestro personaje mágico llevaremos sonrisas, juegos, baile, canto, mucho amor y sorpresas a todos aquellos que lo necesitan.<br><br>Cisne es valiente, atrevido y tiene muchas ganas de cambiar la forma en que las personas ven el mundo, haciendo uso de su simpatía, coraje y perseverancia. Por lo que su lema es “Sonreímos con pasión, para alegrar tu corazón”.<br><br>La mascota de la constelación es un cisne llamado WHIP, bautizado así por la primera generación, dicho nombre representa la fortaleza y la perseverancia de dichos sonriseros por ver crecer la constelación y cambiar el mundo a muchas más personas en Santa Ana.</p>'
    },
    {
      'nombre_const': 'Scutum',
      'img_const': 'assets/img/sedes/scutum.png',
      'color_const': 'Azul Pavo',
      'cod_color': '#0170C1',
      'nacimiento': 'Abril 2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Antigua Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.antiguaguatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/FDS_AntiguaG'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fds_antigua'
      }],
      'mascota': 'Guacamaya',
      'nombre_mascota': 'Qinich',
      'img_mascota': 'assets/img/mascotas/qinich.png',
      'lema': 'Nuestras sonrisas, el mejor escudo',
      'historia': '<p>La primera convocatoria para Antigua Guatemala fue el domingo 7 de abril de 2013. Se eligió el nombre Scutum porque la fecha de la convocatoria coincide con el descubrimiento de esta constelación, tiene una de las estrellas más pequeñas por lo que esto hizo click con la ideología de los voluntarios de este departamento, con gestos y pequeñas acciones se logran grandes cambios.<br><br>El nombre de su mascota es Kinich, el nombre del que provino es de Kinich Kakmó es de origen Maya, y se compone de la siguiente forma KIN que significa sol, ICH qué quiere decir cara, KAAK fuego y MOO guacamaya.<br><br>Los mayas creían que el dios Kinich bajaba en el ardor del sol para purificar, usando la forma de una guacamaya y la interpretación que se le deba en la constelación Scutum es que esta guacamaya bajaría para llenar de alegría y color al departamento de Antigua Guatemala e irradiar de amor y sonrisas como el mismo sol. El lema con el cual se identifican los voluntarios de Antigua Guatemala es "Nuestras sonrisas el mejor escudo".</p>'
    },
    {
      'nombre_const': 'Andromeda',
      'img_const': 'assets/img/sedes/andromeda.png',
      'color_const': 'Vinotinto',
      'cod_color': '#CD0043',
      'nacimiento': 'Marzo 2014',
      'fecha': new Date(2014, 2, 1),
      'sede': 'San Marcos, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Quetzal',
      'nombre_mascota': 'Gugú',
      'img_mascota': 'assets/img/mascotas/gugu.png',
      'lema': 'Pintando el mundo de amor y alegría',
      'historia': '<p>Se planeaba la apertura de Fábrica de Sonrisas en San Marcos en el 2012, pero debido al terremoto se canceló, sin embargo varios voluntarios de Fábrica de Sonrisas de lugares cercanos se acercaron a visitar albergues y hospitales, fue cuando el voluntariado tuvo un gran despliegue en este departamento.<br><br>Su primera convocatoria se llevó a cabo en enero de 2014, a la cual asistieron alrededor de 60 personas, siendo una de las constelaciones con más voluntarios en su primera generación.<br><br>El nombre de su mascota es Gugu, es la traducción de quetzal en idioma maya. Se eligió este nombre con el fin de unir a San Pedro y San Marcos. El lema de esta constelación es “Pintando el mundo de amor y alegría”.</p>'
    },
    {
      'nombre_const': 'Centaurus',
      'img_const': 'assets/img/sedes/centaurus.png',
      'color_const': 'Amarillo Mostaza',
      'cod_color': '#FFC300',
      'nacimiento': 'Junio 2014',
      'fecha': new Date(2014, 5, 1),
      'sede': 'Huehuetenango, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.huehuetenango/'
      }],
      'mascota': 'Centauro',
      'nombre_mascota': 'Kentaury',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': 'Como luz y alegría, nuestro amor dibuja una sonrisa día tras día',
      'historia': '<p>Centaurus nace en junio de 2014, se identifica con el color mostaza, su lema es “Con luz y alegría nuestro amor dibuja una sonrisa día con día”, hasta el momento cuenta con cincuenta doctores graduados.<br><br>Su mascota se llama Kentaury que es un ser único, noble y guerrero que vive en un mundo sumergido en las olas de sonrisas y amor que va transformándose cada día en un gran corazón.</p>'
    },
    {
      'nombre_const': 'Scorpius',
      'img_const': 'assets/img/sedes/scorpius.png',
      'color_const': 'Verde Limón',
      'cod_color': '#C2DA00',
      'nacimiento': 'Noviembre 2014',
      'fecha': new Date(2014, 10, 1),
      'sede': 'Sololá, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Escorpión',
      'nombre_mascota': 'Baxter',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': 'Inyectando gotas de amor',
      'historia': '<p>Fábrica de Sonrisas Sololá nace en noviembre del año 2014, la formación fue impartida por voluntarios de diferentes departamentos de Guatemala.<br><br>En un galaxia que está a dos mil ciento cuarenta años luz, pasando por 10 soles y 27 planetas, habían 16 cuerpos deambulando por el universo, cada uno con un don, y muy cerca entre ellos, sabían que tenían un propósito, pero nadie se atrevía a salir del molde, hasta que un día llego un escuadrón de guerreros, venidos de planetas de dragones, camaleones, unicornios, jaguares, serpientes, quetzales, venados, que decidieron sacar los mejores dotes de cada uno y así formar una pequeña constelación, que quería contagiar de luz a las demás estrellas que estaban a su alrededor, pasaron 282 cometas para que 15 estrellas más pudieran unirse y alumbrar con esfuerzo ese pequeño espacio que poco a poco se llenó de luz, entonces esas 31 estrellas escorpianas y uno cuantos guerreros más tuvieron que esperar 398 mil estrellas fugaces para que 12 de ellas que deambulaban por el espacio se pudieran unir y así pudieran hacer de Scorpius un pequeño lugar lleno de luz, llenando cada vez más de narices rojas que llegan a los lugares que más necesitan alegría.<br><br>El lema con el que se identifican los voluntarios de Sololá es “Inyectando gotitas de amor”, tiene una mascota que lleva por nombre Baxter, es un escorpión que unge gente para amar, su color favorito es el verde limón.</p>'
    },
    {
      'nombre_const': 'Lobo',
      'img_const': 'assets/img/sedes/lobo.png',
      'color_const': 'Lila',
      'cod_color': '#C979F2',
      'nacimiento': 'Marzo 2015',
      'fecha': new Date(2015, 2, 1),
      'sede': 'Jutiapa, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.jutiapa/'
      }],
      'mascota': 'Lobo',
      'nombre_mascota': 'Lupin',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': 'Una manada que ama con locura',
      'historia': '<p>Nace el 15 de marzo en el departamento de Jutiapa, región Oriente de Guatemala. Su nombre proviene del latín Lupus que significa Lobo, este nombre fue elegido debido a que representa la unidad, la familia, ser parte de una manada. El lema de esta constelación es “Una manada que ama con locura”.<br><br>Su mascota tiene por nombre Lupin y es un lobo gris con el pecho blanco. Lupin es lobo en francés y hace referencia a Lupi la estrella más brillante de la constelación lobo.</p>'
    },
    {
      'nombre_const': 'Tortuga',
      'img_const': 'assets/img/sedes/tortuga.png',
      'color_const': 'Verde Musgo',
      'cod_color': '#4C5D16',
      'nacimiento': 'Mayo 2015',
      'fecha': new Date(2015, 4, 1),
      'sede': 'Chimaltenango, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.chimaltenango/'
      }],
      'mascota': 'Tortuga',
      'nombre_mascota': 'Tugui',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': 'Sabiduría de caparazón para alegrar el corazón',
      'historia': '<p>Fábrica de sonrisas en el departamento de Chimaltenango nace en el mes de mayo del año 2015, cuenta la historia que había una persona que quería ver a su pueblo feliz, cambiar su forma de pensar, de vivir, que ayudará más a sus habitantes que tanto lo necesitaban, entonces pensó ¿Qué puedo hacer para que mi pueblo cambie y ayude?<br><br>Entonces miro al cielo, y vio unas constelaciones, que ayudaban y daban amor, también quería el mismo cambio para todos los habitantes de su pueblo, esta persona emocionada se unió a ellas, y desde ese momento nació Tugui, que es un ser hogareño, con pasos firmes, noble por naturaleza y en su caparazón lleva sabiduría para alegrar el corazón del que más lo necesita, por donde quiera que vaya. Su lema es  “Sabiduría del caparazón para alegrar el corazón”.<br><br></p>'
    },
    {
      'nombre_const': 'Moan',
      'img_const': 'assets/img/sedes/moan.png',
      'color_const': 'Turquesa',
      'cod_color': '#03FFFE',
      'nacimiento': 'Julio 2015',
      'fecha': new Date(2015, 6, 1),
      'sede': 'San Salvador, El Salvador',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Lechuza',
      'nombre_mascota': 'Tlamati',
      'img_mascota': 'assets/img/mascotas/tlamati.png',
      'lema': 'La sabiduría del amor es el fuego de nuestro corazón',
      'historia': '<p>Está constelación nace a finales del año 2015. Es una constelación maya que representa una lechuza. Para los mayas las lechuzas son intuitivas, saben llegar al corazón con una sola mirada. Es la energía sabia, la que tiene la palabra justa en el momento adecuado para hacerte sentir bien. Su sabiduría no proviene de los libros, sale del alma. Su mascota es Tlamati, la lechuza y su lema es “La sabiduría del amor es el fuego de nuestro corazón”. Se identifican con el color índigo claro.</p>'
    },
    {
      'nombre_const': 'Triángulum',
      'img_const': 'assets/img/sedes/triangulum.png',
      'color_const': 'Azul Pavo',
      'cod_color': '#0170C1',
      'nacimiento': 'Marzo 2016',
      'fecha': new Date(2016, 2, 1),
      'sede': 'Malacatán, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/fds.malacatan/'
      }],
      'mascota': 'Tigrillo',
      'nombre_mascota': '-',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': 'Todo lo que somos y sabemos es para servir',
      'historia': '<p>Fábrica de Sonrisas en Malacatán, nace el 31 de enero de 2016, constelación cuyas tres estrellas más brillantes forman un triángulo.<br><br>Su mascota es un tigrillo llamado Simba, con corazón valiente y fuerte como ningún otro, transmite alegría y fuerza para enfrentar cualquier lucha. El color con el que se identifica es el azul pavo real y el lema es “Todo lo que somos y tenemos es para servir”.</p>'
    },
    {
      'nombre_const': 'Grulla',
      'img_const': 'assets/img/sedes/grulla.png',
      'color_const': 'Blanco',
      'cod_color': '#FFF ',
      'nacimiento': 'Agosto 2016',
      'fecha': new Date(2016, 7, 1),
      'sede': 'Salamá, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      }],
      'mascota': 'Grulla',
      'nombre_mascota': 'Gros',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': '-',
      'historia': '<p></p>'
    },
    {
      'nombre_const': 'Merak',
      'img_const': 'assets/img/sedes/grulla.png',
      'color_const': 'Blanco',
      'cod_color': '#FFF ',
      'nacimiento': 'Abril 2017',
      'fecha': new Date(2017, 3, 1),
      'sede': 'Santa Crúz del Quiché, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Quiche/'
      }],
      'mascota': 'Estrella',
      'nombre_mascota': 'Gros',
      'img_mascota': 'assets/img/mascotas/hoop.png',
      'lema': '-',
      'historia': '<p>Merak es una estrella familiar para los observadores del hemisferio norte como estrella apuntadora, llamada así porque al extender la línea que la une con la cercana Dubhe (α Ursae Majoris), se llega a Polaris, la Estrella Polar.<br><br>Merak nace el 22 de abril de 2017 en Santa Cruz del Quiché con 15 estrellas que se unieron para formar esta constelación que se caracteriza por su calidez y servicio. Los voluntarios de esta constelación creen en la unidad, que las acciones placenteras y cosas materiales que nos traen felicidad, nunca se compararan con la sonrisa, un abrazo o ver que lograste hacer reír a quien amas.</p>'
    }
  ];
  }

  ionViewDidLoad(){
        console.log('Funcion reinicio');
        //this.navCtrl.setRoot(ConstelacionesPage);
        //break;
  };

  /*this.constelaciones = this.constelaciones.sort(function(a,b) {
    return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
});*/


  //Mando el arreglo de las constelaciones a la vista del detalle de cada una
  detalleConstelaciones(item) {
    //this.navCtrl.push(ConstelacionesPage);
    this.navCtrl.push(DetalleConstelacionesPage, {item:item});
  }
}
