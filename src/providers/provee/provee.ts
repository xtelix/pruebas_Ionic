import { Personas } from './../../Data/persona';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProveeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveeProvider {

  listaPersonas: any;
  constructor() {
    this.listaPersonas = Personas;
  }
  
  cargarPersonas(){
    return this.listaPersonas;
  }
}
