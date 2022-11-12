import {Ingreso} from './ingreso.model';

export class IngresoServicio{

    ingresos: Ingreso[] = [
      new Ingreso('Salario', 5000),
      new Ingreso('Venta auto', 5000)
    ];

    eliminar(ingreso: Ingreso): void{
      const indice: number = this.ingresos.indexOf(ingreso);
      this.ingresos.splice(indice, 1);
    }

}
