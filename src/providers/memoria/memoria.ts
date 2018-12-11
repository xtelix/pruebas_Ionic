import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the MemoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemoriaProvider {


  constructor(private storage : Storage) {
 
  }

  saveInfoLocal(info:string){
    this.storage.set("identificador",info);
  }

  getInfoLocal(tag:string){
    this.storage.get(tag).then((val)=>{
      console.log("YOUR NAME IS " +val);
    });
  }
}
