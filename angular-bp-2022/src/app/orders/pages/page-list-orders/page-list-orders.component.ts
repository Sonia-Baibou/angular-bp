import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {


  titre: any;
  // transformer enum en tableau
  public states = Object.values(StateOrder);

  // en-têtes du tableau de type array
  public headers = ['Action', 'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State' ]
  // public collection!: Order[];

  public collection$!: Observable<Order[]>

  constructor(
    private ordersService: OrdersService,
    private router : Router
    ) {
    this.titre = {name: 'Liste orders'}
    // appel à notre collection
    this.ordersService.refreshCollection()
    this.collection$ = this.ordersService.collection;
  }

  ngOnInit(): void {
  }

  public changeTitle(): void{
    // changer le titre au niveau d'une propriété
    this.titre.name = "Nouveau nom"
  }

  public total(val: number, coef:number, tva?: number): number{
    console.log('fonction total')
    if(tva){
      return val * coef * (1+ tva/100)
    }
    return val * coef
  }

  public changeState(item: Order, event: Event): void{
    const target = event.target as HTMLSelectElement
    const state = target.value ;
    console.log(state, "state")
    // appel vers méthode du service changeState
    this.ordersService.changeState(item, <StateOrder>state).subscribe((res)=>{
      //item.state = res.state;
      console.log(res instanceof Order)
      Object.assign(item, res)
    })
  }

  public goToEdit(item: Order): void{
    // redirection orders/edit/item.id
    this.router.navigate(['orders', 'edit', item.id])
  }

  public deleteItem(item: Order): void{
    // appel au service
    this.ordersService.delete(item).subscribe()
  }



}
