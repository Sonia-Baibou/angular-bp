import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public item = new Order();

  constructor(
    private ordersService : OrdersService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public onAction(item: Order){
    console.log('onActionDeclenché', item);
    // appel vers service
    this.ordersService.add(item).subscribe(()=>{
      // redirect
      this.router.navigate(['orders'])
    });
  }

}
