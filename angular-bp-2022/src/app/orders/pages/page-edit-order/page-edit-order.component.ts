import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  
  public item!: Order;
  public items$!: Observable<Order>
  constructor(
    private ordersService : OrdersService,
    private router : Router,
    private route : ActivatedRoute
  ) {

    // récupérer l'id dans l'url
    const id = Number(this.route.snapshot.paramMap.get('id'))
    // appeler service.getElementById(id)
    this.items$ = this.ordersService.getItemById(id);

  }

  ngOnInit(): void {
  }

  public onAction(item: Order): void{
    // accéder à la fonction update de service
    // besoin d'injecter le service
    this.ordersService.update(item).subscribe(()=>{
      // redirection
      this.router.navigate(['orders'])
    })
  }

}
