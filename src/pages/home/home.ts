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
  numero: number;
  constructor(public navCtrl: NavController, 
    public pro: ProveeProvider, 
    public alertCtrl: AlertController,
    public navParams: NavParams) {
    this.returnProvider(); 
    this.numero = Math.floor( Math.random()*10);  
  }

  numeroAleatorio(){
    this.numero = Math.floor( Math.random()*10); 
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
 
 console.log(this.navParams.get("temp"));
 this.temp = this.navParams.get("temp");

 console.log("ionViewCanEnter"+1);
}

ionViewCanLeave(){
  console.log("ionViewCanLeave"+3);
}

ionViewDidLoad(){
  console.log("ionViewDidLoad"+3);
}

ionViewWillEnter(){
  console.log("ionViewWillEnter"+2);
}

ionViewDidEnter(){
  console.log("ionViewDidEnter"+4);
}

ionViewWillLeave(){
  console.log("ionViewWillLeave"+5);
}

ionViewDidLeave(){
  console.log("ionViewDidLeave"+7);
}

ionViewWillUnload(){
  console.log("ionViewWillUnload"+6);
}

}
