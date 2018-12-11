import { HomePage } from './../home/home';
import { User } from './../../models/users';
import { MemoriaProvider } from './../../providers/memoria/memoria';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


/**
 * Generated class for the TransicionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transiciones',
  templateUrl: 'transiciones.html',
})
export class TransicionesPage {

  persona : string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private memoriaProvider: MemoriaProvider) {
      this.persona = "";
  }

  ionViewDidLoad() {
    
  }

  ionViewCanLeave(){
    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    })
    loading.present();   

    let promesa = new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve(true);    
        loading.dismiss(); 
      }, 5000);
    });

   return promesa;
  }

  irTransiciones(){
    this.navCtrl.push(TransicionesPage);
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");
    let promesa = new Promise((resolve, reject)=>{
       this.confirmAlert(resolve);
    });
   
    return promesa;
  }


  confirmAlert(resol:any){
    const confirm = this.alertCtrl.create({
      title: 'Permiso',
      message: 'Desea continuar?',
      buttons: [
      {
        text: 'Me quedo',
        handler: () => {
          resol (false)             
        }
      },
      {
        text: 'Continuar',
        handler: () => {
         resol (true)   
        }
      }
     ]     
    });

    confirm.present();
  }

  ingresarData(dato:string){
    console.log(dato);
    this.persona = dato;
    this.memoriaProvider.saveInfoLocal(this.persona);
    this.memoriaProvider.getInfoLocal("identificador");
  }

  irBack(dato:string){
    let temp = dato;
    this.navCtrl.pop();
    this.navCtrl.push(HomePage, {temp});
  }
}
