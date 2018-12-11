import { TransicionesPage } from './../transiciones/transiciones';
import { ProveeProvider } from './../../providers/provee/provee';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: any;
  constructor(public navCtrl: NavController, 
    public pro: ProveeProvider, 
    public alertCtrl: AlertController,
    public navParams: NavParams) {
    this.returnProvider();
  }

  returnProvider(){
    this.list = this.pro.cargarPersonas();
  }

mostrarAlerta(persona:any){
  const alert = this.alertCtrl.create({
    title: persona.nombre +' ' +persona.apellido,
    subTitle:'Es tu nuevo amigo, y su id es: ' +persona.id,
    buttons:['OK']
  });


  alert.present();
}

irTran(){
  this.navCtrl.push(TransicionesPage);
}

temp: any;

ionViewCanEnter(){
 
 console.log(this.navParams.data);
 this.temp = this.navParams.data;
}
}
