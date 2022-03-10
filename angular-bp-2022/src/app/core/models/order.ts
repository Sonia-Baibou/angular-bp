import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interface/order-i";

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;

  // on va récupérer un objet complet de Order
  constructor(obj?: Partial<Order>){
    // methode Object.assign
    // Object.assign(cible, source)
    if(obj){
      Object.assign(this, obj)
    }
  }
  totalHT(): number{
    return this.tjmHt * this.nbJours;
  }
  totalTTC(): number{
    return this.tjmHt * this.nbJours * (1 + this.tva/100);
  }


}
