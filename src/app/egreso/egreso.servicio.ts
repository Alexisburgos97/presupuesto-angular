import {Egreso} from './egreso.model';
import {Ingreso} from "../ingreso/ingreso.model";

export class EgresoServicio{

  egresos: Egreso[] = [
    new Egreso('Alquiler Depto', 3000),
    new Egreso('Ropa', 3300)
  ];

  eliminar(egreso: Egreso): void{
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }

}
